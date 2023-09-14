const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async products(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                console.log(JSON.stringify({ query, variables }))
                const data = await getDataFromCommerceTool({ query, variables });
                return data.products;
            } catch (error) {
                console.log(error);
            }
        },

        async product(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.product;
            } catch (error) {
                console.log(error);
            }
        },

        async productTypes(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.productTypes;
            } catch (error) {
                console.log(error);
            }
        },

        async productType(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.productType;
            } catch (error) {
                console.log(error);
            }
        },
    },

    Mutation: {
        async createProductType(_, __, contextValue) {
            try {
                const { query } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query });
                return data.createProductType;
            } catch (error) {
                console.log(error);
            }
        },

        async createProduct(_, __, contextValue) {
            try {
                const { query } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query });
                return data.createProduct;
            } catch (error) {
                console.log(error);
            }
        },
    }
};

module.exports = { resolvers };