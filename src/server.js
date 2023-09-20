const { createServer } = require('http');
const cors = require('cors');
const lodash = require('lodash');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { default: expressPlayground } = require('graphql-playground-middleware-express');
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { buildHTTPExecutor } = require("@graphql-tools/executor-http");
const { schemaFromExecutor } = require("@graphql-tools/wrap");

const { resolvers: customerResolver } = require("./graphql/resolvers/customer");
const { resolvers: productResolver } = require("./graphql/resolvers/product");
const { resolvers: orderResolver } = require("./graphql/resolvers/order");

const { PORT, DEV_PROJECT_KEY, DEV_API_URL } = require("./config/config");
const { getAccessToken } = require("./middleware/token");

class App {
    async startServer() {
        try {
            const remoteSchemaURL = `${DEV_API_URL}/${DEV_PROJECT_KEY}/graphql`;
            
            const app = express();

            app.use(cors());

            const accessToken = await getAccessToken();

            const remoteExecutor = buildHTTPExecutor({
                endpoint: remoteSchemaURL,
                headers: {
                    'authorization': 'Bearer ' + accessToken
                }
            });

            const subschema = {
                schema: await schemaFromExecutor(remoteExecutor),
                executor: remoteExecutor
            };

            const schema = makeExecutableSchema({
                typeDefs: subschema.schema,
                resolvers: lodash.merge(customerResolver, productResolver, orderResolver)
            });

            const server = new ApolloServer({
                schema,
                context: ({ req }) => ({ req }),
                introspection: true
            });

            await server.start();

            server.applyMiddleware({ app, path: '/graphql' });

            app.get("/", expressPlayground({ endpoint: "/graphql" }));

            const httpServer = createServer(app);

            httpServer.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        } catch (error) {
            console.log("Internal Server Error", error);
        }
    }
}

module.exports = new App();