const ServiceService = require('../../../services/serviceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  serviceDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  serviceDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceDestroy);

    await new ServiceService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
