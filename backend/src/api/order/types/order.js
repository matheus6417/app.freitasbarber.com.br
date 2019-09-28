const schema = `
  type Order {
    id: String!
    customer: [ Customer! ]
    products: [ Product! ]
    employee: User
    delivered: Boolean
    attachments: [ File! ]
    services: [ Service! ]
    date: DateTime
    photos: [ File! ]
    description: String
    total: Float
    valueAlt: Float
    e1: String
    e2: Int
    e3: Float
    e4: String
    e5: DateTime
    e6: Boolean
    e7: OrderE7Enum
    e8: [ File! ]
    e9: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
