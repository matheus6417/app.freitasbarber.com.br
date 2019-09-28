const schema = `
  input SpendingFilterInput {
    id: String
    name: String
    dateRange: [ String ]
    valueRange: [ Float ]
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
