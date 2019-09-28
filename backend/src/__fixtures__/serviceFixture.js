const genericFixture = require('./genericFixture');
const ServiceRepository = require('../database/repositories/serviceRepository');

const serviceFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new ServiceRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = serviceFixture;
