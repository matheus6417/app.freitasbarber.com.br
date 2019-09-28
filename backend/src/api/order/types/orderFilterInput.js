const schema = `
  input OrderFilterInput {
    id: String
    employee: String
    description: String
    totalRange: [ Float ]
    valueAltRange: [ Float ]
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
