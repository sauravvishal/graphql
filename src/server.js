const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const { PORT } = require("./config/config");
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/result');

class App {
    async startServer() {
        try {
            const server = new ApolloServer({
                typeDefs,
                resolvers,
                introspection: true,
                playground: true
            });

            const { url } = await startStandaloneServer(server, {
                listen: { port: PORT },
            });

            console.log(`Server runnig at: ${url}`);
        } catch (error) {
            console.log("Internal Server Error", error);
        }
    }
}

module.exports = new App();