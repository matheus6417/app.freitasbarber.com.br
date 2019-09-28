const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Spending extends AbstractEntityModel {
  constructor() {
    super('spending', 'spending', {
      name: new types.String(null, null),
      date: new types.Date(),
      value: new types.Number(null, null),
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
