const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async categories(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.categories;
            } catch (error) {
                console.log(error);
            }
        },

        async category(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.category;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };