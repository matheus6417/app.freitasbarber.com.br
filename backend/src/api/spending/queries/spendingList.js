const SpendingService = require('../../../services/spendingService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  spendingList(filter: SpendingFilterInput, limit: Int, offset: Int, orderBy: SpendingOrderByEnum): SpendingPage!
`;

const resolver = {
  spendingList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.spendingRead);

    return new SpendingService(context).findAndCountAll({
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
