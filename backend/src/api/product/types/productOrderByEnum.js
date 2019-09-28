const schema = `
  enum ProductOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    unitPrice_ASC
    unitPrice_DESC
    category_ASC
    category_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
