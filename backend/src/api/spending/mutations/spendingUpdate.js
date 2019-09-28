const SpendingService = require('../../../services/spendingService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  spendingUpdate(id: String!, data: SpendingInput!): Spending!
`;

const resolver = {
  spendingUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingEdit);

    return new SpendingService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
