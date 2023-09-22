const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async discountCodes(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.discountCodes;
            } catch (error) {
                console.log(error);
            }
        },

        async discountCode(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.discountCode;
            } catch (error) {
                console.log(error);
            }
        },

        async productDiscounts(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.productDiscounts;
            } catch (error) {
                console.log(error);
            }
        },

        async productDiscount(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.productDiscount;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };