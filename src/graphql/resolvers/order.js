const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async orders(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.orders;
            } catch (error) {
                console.log(error);
            }
        },

        async order(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.order;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };