const { TestData } = require('../Data');
const resolvers = {
  Query: {
    getAllData(_, __, contextValue) {
      const { query } = contextValue.req.body;
      return TestData;
    },
  },

  Mutation: {
    createData(parent, args) {
      const newData = args;
      TestData.push(newData);
      return newData;
    }
  }
};

module.exports = { resolvers };