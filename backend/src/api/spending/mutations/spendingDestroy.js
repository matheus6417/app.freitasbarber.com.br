const SpendingService = require('../../../services/spendingService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  spendingDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  spendingDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingDestroy);

    await new SpendingService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
