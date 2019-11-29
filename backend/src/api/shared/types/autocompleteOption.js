const schema = `
  type AutocompleteOption {
    id: String!
    label: String!
    unitPrice: Float!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
