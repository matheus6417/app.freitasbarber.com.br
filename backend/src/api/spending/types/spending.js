const schema = `
  type Spending {
    id: String!
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
    e8: [ File! ]
    e9: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
