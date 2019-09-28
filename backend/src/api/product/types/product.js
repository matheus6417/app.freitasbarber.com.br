const schema = `
  type Product {
    id: String!
    name: String
    description: String
    unitPrice: Float
    photo: [ File! ]
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
    e8: [ File! ]
    e9: [ File! ]
    active: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
