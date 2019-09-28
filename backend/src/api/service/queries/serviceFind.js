const ServiceService = require('../../../services/serviceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  serviceFind(id: String!): Service!
`;

const resolver = {
  serviceFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceRead);

    return new ServiceService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
