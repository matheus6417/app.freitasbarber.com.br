const SpendingService = require('../../../services/spendingService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  spendingFind(id: String!): Spending!
`;

const resolver = {
  spendingFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingRead);

    return new SpendingService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
