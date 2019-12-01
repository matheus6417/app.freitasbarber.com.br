const schema = `
  type AutocompleteOption {
    id: String!
    label: String!
    unitPrice: Float!
    phone1: String!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
