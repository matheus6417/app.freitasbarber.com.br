const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Service extends AbstractEntityModel {
  constructor() {
    super('service', 'service', {
      name: new types.String(null, null),
      unitPrice: new types.Number(null, null),
      description: new types.String(null, null),
      e1: new types.String(null, null),
      e2: new types.Number(null, null),
      e3: new types.Number(null, null),
      e4: new types.Date(),
      e5: new types.DateTime(),
      e6: new types.Boolean(),
      isActive: new types.Boolean(),
      e7: new types.Enumerator([
        "a",
        "b",
        "c"
      ]),
      e8: new types.Files(),
      e9: new types.Files(),
      image: new types.Files(),
      importHash: new types.String(null, 255),
    });
  }
};
