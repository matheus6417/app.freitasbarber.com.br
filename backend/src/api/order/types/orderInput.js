const schema = `
  input OrderInput {
    customer: [ String! ]
    products: [ String! ]
    employee: String
    delivered: Boolean
    attachments: [ FileInput! ]
    services: [ String! ]
    date: DateTime
    photos: [ FileInput! ]
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
    e8: [ FileInput! ]
    e9: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
