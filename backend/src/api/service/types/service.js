const schema = `
  type Service {
    id: String!
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
    e8: [ File! ]
    e9: [ File! ]
    image: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
