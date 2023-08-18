const express = require('express');
const { createServer } = require('http');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/result');
const { PORT } = require("./config/config");
const cors = require('cors');


class App {
    async startServer() {
        try {
            const app = express();
            app.use(cors());
            const server = new ApolloServer({ 
                typeDefs, 
                resolvers,
                introspection: true,
                playground: {
                    settings: {
                        'editor.theme': 'light',
                    },
                    tabs: [
                        {
                            endpoint,
                            query: defaultQuery,
                        },
                    ],
                },
             });
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