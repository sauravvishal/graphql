const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async customers(_, __, contextValue) {
            try {
                const { query } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query });
                return data.customers;
            } catch (error) {
                console.log(error);
            }
        },

        async customer(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.customer;
            } catch (error) {
                console.log(error);
            }
        },
    }
};

module.exports = { resolvers };