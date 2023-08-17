const express = require('express');
const { createServer } = require('http');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/result');
const { PORT } = require("./config/config");

class App {
    async startServer() {
        try {
            const app = express();
            const server = new ApolloServer({ typeDefs, resolvers });
            await server.start();
            server.applyMiddleware({ app, path: '/graphql' });

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