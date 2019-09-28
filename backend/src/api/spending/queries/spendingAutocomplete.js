const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const SpendingService = require('../../../services/spendingService');

const schema = `
  spendingAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  spendingAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingAutocomplete);

    return new SpendingService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
