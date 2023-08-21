const express = require('express');
const { createServer } = require('http');
const { ApolloServer } = require('apollo-server-express');
const { default: expressPlayground } = require('graphql-playground-middleware-express');

const { typeDefs } = require('./graphql/schemas/schema');
const { resolvers } = require('./graphql/resolvers/result');
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
                playground: true,
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


// const express = require('express');
// const { graphqlHTTP } = require('express-graphql')
// const { typeDefs } = require('./graphql/schema');
// const resolvers = require('./graphql/result');
// const { PORT } = require("./config/config");
// const { default: expressPlayground } = require('graphql-playground-middleware-express');
// class App {
//     async startServer() {
//         try {
//             const app = express();
//             app.use("/graphql", graphqlHTTP((req) => ({
//                 schema: typeDefs,
//                 rootValue: resolvers,
//                 graphiql: true
//             })));

//             app.get("/", expressPlayground({ endpoint: "/graphql" }));

//             app.listen({ port: PORT }, () => {
//                 console.log(`Server running at :${PORT}`);
//             });
//         } catch (error) {
//             console.log("Internal Server Error", error);
//         }
//     }
// }

// module.exports = new App();