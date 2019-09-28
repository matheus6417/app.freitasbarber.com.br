const schema = `
  type ServicePage {
    rows: [Service!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
