const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Customer extends AbstractEntityModel {
  constructor() {
    super('customer', 'customer', {
      name: new types.String(null, null),
      birthdate: new types.Date(),
      gender: new types.Enumerator([
        "male",
        "female"
      ]),
      adress: new types.String(null, null),
      phone1: new types.String(null, null),
      phone2: new types.String(null, null),
      relation: new types.RelationToOne(),
      relationDescription: new types.String(null, null),
      e1: new types.String(null, null),
      e2: new types.Number(null, null),
      e3: new types.Number(null, null),
      e4: new types.Date(),
      e5: new types.DateTime(),
      e6: new types.Boolean(),
      active: new types.Boolean(),
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
