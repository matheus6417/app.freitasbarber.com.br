const userFixture = require('./userFixture');
const customerFixture = require('./customerFixture');
const productFixture = require('./productFixture');
const orderFixture = require('./orderFixture');
const serviceFixture = require('./serviceFixture');
const spendingFixture = require('./spendingFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  customer: customerFixture,
  product: productFixture,
  order: orderFixture,
  service: serviceFixture,
  spending: spendingFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
