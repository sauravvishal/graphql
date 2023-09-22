const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async payments(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.payments;
            } catch (error) {
                console.log(error);
            }
        },

        async payment(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.payment;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };