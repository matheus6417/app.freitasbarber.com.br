const schema = `
  enum CustomerOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    birthdate_ASC
    birthdate_DESC
    gender_ASC
    gender_DESC
    adress_ASC
    adress_DESC
    relationDescription_ASC
    relationDescription_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
