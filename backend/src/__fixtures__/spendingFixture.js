const genericFixture = require('./genericFixture');
const SpendingRepository = require('../database/repositories/spendingRepository');

const spendingFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new SpendingRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = spendingFixture;
