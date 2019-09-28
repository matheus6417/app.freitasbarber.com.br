const schema = `
  input SpendingInput {
    name: String
    date: String
    value: Float
    e1: String
    e2: Int
    e3: Float
    e4: String
    e5: DateTime
    e6: Boolean
    e7: SpendingE7Enum
    e8: [ FileInput! ]
    e9: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
