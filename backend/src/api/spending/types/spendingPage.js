const schema = `
  type SpendingPage {
    rows: [Spending!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
