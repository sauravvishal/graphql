const { getDataFromCommerceTool } = require('../../services/resolver.service');

const resolvers = {
    Query: {
        async channels(_, __, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.channels;
            } catch (error) {
                console.log(error);
            }
        },

        async channel(_, args, contextValue) {
            try {
                const { query, variables } = contextValue.req.body;
                const data = await getDataFromCommerceTool({ query, variables });
                return data.channel;
            } catch (error) {
                console.log(error);
            }
        },
    },
};

module.exports = { resolvers };