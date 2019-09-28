const ServiceService = require('../../../services/serviceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  serviceUpdate(id: String!, data: ServiceInput!): Service!
`;

const resolver = {
  serviceUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceEdit);

    return new ServiceService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
