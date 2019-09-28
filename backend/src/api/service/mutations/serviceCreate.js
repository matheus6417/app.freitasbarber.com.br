const ServiceService = require('../../../services/serviceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  serviceCreate(data: ServiceInput!): Service!
`;

const resolver = {
  serviceCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceCreate);

    return new ServiceService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
