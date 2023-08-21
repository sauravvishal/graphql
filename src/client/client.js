const { createClient } = require("@commercetools/sdk-client");
const { createAuthMiddlewareForClientCredentialsFlow } = require("@commercetools/sdk-middleware-auth");
const { createHttpMiddleware } = require("@commercetools/sdk-middleware-http");
const fetch = require("node-fetch");

const { DEV_CLIENT_ID, DEV_CLIENT_SECRET, DEV_PROJECT_KEY, DEV_API_URL, DEV_AUTH_URL, DEV_SCOPES } = require("../config/config");

// Create a httpMiddleware for the your project AUTH URL
const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
    host: DEV_AUTH_URL,
    projectKey: DEV_PROJECT_KEY,
    credentials: {
        clientId: DEV_CLIENT_ID,
        clientSecret: DEV_CLIENT_SECRET,
    },
    scopes: [DEV_SCOPES],
    fetch
});

// Create a httpMiddleware for the your project API URL
const httpMiddleware = createHttpMiddleware({
    host: DEV_API_URL,
    fetch
});

// Create a client using authMiddleware and httpMiddleware
const client = createClient({
    middlewares: [authMiddleware, httpMiddleware],
});

module.exports = { client };