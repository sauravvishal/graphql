const { buildSchema } = require('graphql');
const typeDefs = `
  type Data {
    Name: String!
    Age: Int!
  }
  type Query {
    getAllData: [Data!]!
  }
  type Mutation {
    createData(Name: String!, Age: Int!): Data!
  }
`;

module.exports = { typeDefs };
