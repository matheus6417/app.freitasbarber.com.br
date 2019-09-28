const SpendingService = require('../../../services/spendingService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  spendingImport(data: SpendingInput!, importHash: String!): Boolean
`;

const resolver = {
  spendingImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingImport);

    await new SpendingService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
