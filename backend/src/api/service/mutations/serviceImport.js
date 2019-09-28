const ServiceService = require('../../../services/serviceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  serviceImport(data: ServiceInput!, importHash: String!): Boolean
`;

const resolver = {
  serviceImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceImport);

    await new ServiceService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
