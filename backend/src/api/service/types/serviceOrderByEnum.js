const schema = `
  enum ServiceOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    unitPrice_ASC
    unitPrice_DESC
    description_ASC
    description_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
