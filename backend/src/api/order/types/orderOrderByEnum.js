const schema = `
  enum OrderOrderByEnum {
    id_ASC
    id_DESC
    description_ASC
    description_DESC
    total_ASC
    total_DESC
    valueAlt_ASC
    valueAlt_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
