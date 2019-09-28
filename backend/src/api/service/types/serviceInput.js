const schema = `
  input ServiceInput {
    name: String
    unitPrice: Float
    description: String
    e1: String
    e2: Int
    e3: Float
    e4: String
    e5: DateTime
    e6: Boolean
    isActive: Boolean
    e7: ServiceE7Enum
    e8: [ FileInput! ]
    e9: [ FileInput! ]
    image: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
