const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Product extends AbstractEntityModel {
  constructor() {
    super('product', 'product', {
      name: new types.String(null, null),
      description: new types.String(null, null),
      unitPrice: new types.Number(null, null),
      photo: new types.Files(),
      costPrice: new types.Number(null, null),
      category: new types.String(null, null),
      e1: new types.String(null, null),
      e2: new types.Number(null, null),
      e3: new types.Number(null, null),
      e4: new types.Date(),
      e5: new types.DateTime(),
      e6: new types.Boolean(),
      dateCheck: new types.Date(),
      e7: new types.Enumerator([
        "a",
        "b",
        "c"
      ]),
      e8: new types.Files(),
      e9: new types.Files(),
      active: new types.Boolean(),
      importHash: new types.String(null, 255),
    });
  }
};
