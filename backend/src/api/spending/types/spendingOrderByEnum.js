const schema = `
  enum SpendingOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    date_ASC
    date_DESC
    value_ASC
    value_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
