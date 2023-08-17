const { name, description, entryPointUriPath, applicationId } = require("./constants");

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
    name,
    description,
    entryPointUriPath,
    applicationId
};
module.exports = config;