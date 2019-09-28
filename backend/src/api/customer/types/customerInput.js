const schema = `
  input CustomerInput {
    name: String
    birthdate: String
    gender: CustomerGenderEnum
    adress: String
    phone1: String
    phone2: String
    relation: String
    relationDescription: String
    e1: String
    e2: Int
    e3: Float
    e4: String
    e5: DateTime
    e6: Boolean
    active: Boolean
    e7: CustomerE7Enum
    e8: [ FileInput! ]
    e9: [ FileInput! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
