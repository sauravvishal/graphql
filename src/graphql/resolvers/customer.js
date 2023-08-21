const { createRequestBuilder } = require("@commercetools/api-request-builder");
const { DEV_PROJECT_KEY, DEV_API_URL } = require("../../config/config");
const { client } = require("../../client/client");

const commerceToolsApiUrl = `https://${DEV_API_URL}/${DEV_PROJECT_KEY}/graphql`;

const resolvers = {
    Query: {
        async queryCustomers() {
            try {
                const customerService = createRequestBuilder({ projectKey: DEV_PROJECT_KEY }).customers;

                const createGetProjectRequest = {
                    uri: customerService.build(),
                    method: "GET",
                };

                const data = await client.execute(createGetProjectRequest);
                return data.body;
            } catch (error) {
                console.log(error);
            }
        },
    }
};

module.exports = { resolvers };