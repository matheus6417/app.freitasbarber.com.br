const schema = `
  input ProductInput {
    name: String
    description: String
    unitPrice: Float
    photo: [ FileInput! ]
    costPrice: Float
    category: String
    e1: String
    e2: Int
    e3: Float
    e4: String
    e5: DateTime
    e6: Boolean
    dateCheck: String
    e7: ProductE7Enum
    e8: [ FileInput! ]
    e9: [ FileInput! ]
    active: Boolean
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
