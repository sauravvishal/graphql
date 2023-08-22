const { DEV_PROJECT_KEY, DEV_API_URL } = require("../../config/config");
const axios = require("axios");

const commerceToolsApiUrl = `${DEV_API_URL}/${DEV_PROJECT_KEY}/graphql`;

const { getAccessToken } = require("../../middleware/token");

const resolvers = {
    Query: {
        async customers(_, __, contextValue) {
            try {
                const { query } = contextValue.req.body;
                const data = JSON.stringify({
                    query: query,
                    variables: {}
                });

                const accessToken = await getAccessToken();

                const config = {
                    method: 'post',
                    url: commerceToolsApiUrl,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + accessToken
                    },
                    data
                };
                const resp = (await axios(config)).data;

                return resp.data.customers;
            } catch (error) {
                console.log(error);
            }
        },

        async customer(_, args, contextValue) {
            try {
                const { query } = contextValue.req.body;
                // console.log({ args, query })
                const accessToken = await getAccessToken();
                console.log({accessToken})
                // const data = JSON.stringify({
                //     query: query,
                //     variables: {}
                // });

                // const config = {
                //     method: 'post',
                //     url: commerceToolsApiUrl,
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'Authorization': 'Bearer uywwRk7eik5MIwK24hpDF_Y_wnrKuE7z'
                //     },
                //     data
                // };
                // const resp = (await axios(config)).data;

                // return resp.data.customers;
            } catch (error) {
                console.log(error);
            }
        },
    }
};

module.exports = { resolvers };