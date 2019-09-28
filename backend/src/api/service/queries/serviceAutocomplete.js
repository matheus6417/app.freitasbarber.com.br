const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ServiceService = require('../../../services/serviceService');

const schema = `
  serviceAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  serviceAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceAutocomplete);

    return new ServiceService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
