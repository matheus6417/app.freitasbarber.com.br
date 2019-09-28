const schema = `
  input ServiceFilterInput {
    id: String
    name: String
    unitPriceRange: [ Float ]
    description: String
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
