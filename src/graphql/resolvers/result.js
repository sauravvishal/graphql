const { TestData } = require('../Data');
const resolvers = {
  Query: {
    getAllData() {
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

// module.exports = {
//   getAllData() {
//     return TestData;
//   },
//   createData(parent, args) {
//     const newData = args;
//     TestData.push(newData);
//     return newData;
//   }
// }