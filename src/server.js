const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const { default: expressPlayground } = require('graphql-playground-middleware-express');
const lodash = require('lodash');
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { typeDefs } = require('./graphql/schemas/schema');
const { resolvers } = require('./graphql/resolvers/result');
const { typeDefs: customer } = require("./graphql/schemas/customer");
const { resolvers: customerResolver } = require("./graphql/resolvers/customer");
const { PORT } = require("./config/config");


class App {
    async startServer() {
        try {
            const app = express();

            app.use(cors());
            
            const schema = makeExecutableSchema({
                typeDefs: [typeDefs, customer],
                resolvers: lodash.merge(resolvers, customerResolver)
            });

            const server = new ApolloServer({
                schema,
                context: ({ req }) => ({ req })
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