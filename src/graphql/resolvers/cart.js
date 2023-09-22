const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async carts(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.carts;
            } catch (error) {
                console.log(error);
            }
        },

        async cart(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.cart;
            } catch (error) {
                console.log(error);
            }
        },

        async cartDiscounts(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.cartDiscounts;
            } catch (error) {
                console.log(error);
            }
        },

        async cartDiscount(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.cartDiscount;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };