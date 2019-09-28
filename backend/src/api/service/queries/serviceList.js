const ServiceService = require('../../../services/serviceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  serviceList(filter: ServiceFilterInput, limit: Int, offset: Int, orderBy: ServiceOrderByEnum): ServicePage!
`;

const resolver = {
  serviceList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.serviceRead);

    return new ServiceService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
