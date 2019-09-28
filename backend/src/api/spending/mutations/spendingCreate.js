const SpendingService = require('../../../services/spendingService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  spendingCreate(data: SpendingInput!): Spending!
`;

const resolver = {
  spendingCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingCreate);

    return new SpendingService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
