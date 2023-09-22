const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async customObjects(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.customObjects;
            } catch (error) {
                console.log(error);
            }
        },

        async customObject(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.customObject;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };