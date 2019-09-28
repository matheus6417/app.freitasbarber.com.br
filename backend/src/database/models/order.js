const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Order extends AbstractEntityModel {
  constructor() {
    super('order', 'order', {
      customer: new types.RelationToMany(),
      products: new types.RelationToMany(),
      employee: new types.RelationToOne(),
      delivered: new types.Boolean(),
      attachments: new types.Files(),
      services: new types.RelationToMany(),
      date: new types.DateTime(),
      photos: new types.Files(),
      description: new types.String(null, null),
      total: new types.Number(null, null),
      valueAlt: new types.Number(null, null),
      e1: new types.String(null, null),
      e2: new types.Number(null, null),
      e3: new types.Number(null, null),
      e4: new types.Date(),
      e5: new types.DateTime(),
      e6: new types.Boolean(),
      e7: new types.Enumerator([
        "a",
        "b",
        "c"
      ]),
      e8: new types.Files(),
      e9: new types.Files(),
      importHash: new types.String(null, 255),
    });
  }
};
