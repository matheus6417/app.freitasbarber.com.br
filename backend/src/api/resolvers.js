const mergeResolvers = require('./shared/utils/mergeGraphqlResolvers');

const sharedTypes = require('./shared/types');

const settingsTypes = require('./settings/types');
const settingsQueries = require('./settings/queries');
const settingsMutations = require('./settings/mutations');

const authTypes = require('./auth/types');
const authQueries = require('./auth/queries');
const authMutations = require('./auth/mutations');

const iamTypes = require('./iam/types');
const iamQueries = require('./iam/queries');
const iamMutations = require('./iam/mutations');

const auditLogTypes = require('./auditLog/types');
const auditLogQueries = require('./auditLog/queries');
const auditLogMutations = require('./auditLog/mutations');

const customerTypes = require('./customer/types');
const customerQueries = require('./customer/queries');
const customerMutations = require('./customer/mutations');

const productTypes = require('./product/types');
const productQueries = require('./product/queries');
const productMutations = require('./product/mutations');

const orderTypes = require('./order/types');
const orderQueries = require('./order/queries');
const orderMutations = require('./order/mutations');

const serviceTypes = require('./service/types');
const serviceQueries = require('./service/queries');
const serviceMutations = require('./service/mutations');

const spendingTypes = require('./spending/types');
const spendingQueries = require('./spending/queries');
const spendingMutations = require('./spending/mutations');

const types = [
  ...sharedTypes,
  ...iamTypes,
  ...authTypes,
  ...auditLogTypes,
  ...settingsTypes,
  ...customerTypes,
  ...productTypes,
  ...orderTypes,
  ...serviceTypes,
  ...spendingTypes,
].map((type) => type.resolver);

const queries = [
  ...iamQueries,
  ...authQueries,
  ...auditLogQueries,
  ...settingsQueries,
  ...customerQueries,
  ...productQueries,
  ...orderQueries,
  ...serviceQueries,
  ...spendingQueries,
].map((query) => query.resolver);

const mutations = [
  ...iamMutations,
  ...authMutations,
  ...auditLogMutations,
  ...settingsMutations,
  ...customerMutations,
  ...productMutations,
  ...orderMutations,
  ...serviceMutations,
  ...spendingMutations,
].map((mutation) => mutation.resolver);

module.exports = mergeResolvers(types, queries, mutations);
