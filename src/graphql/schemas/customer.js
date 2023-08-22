const { buildSchema } = require('graphql');

const typeDefs = `
  extend type Query {
    customers: GetCustomersResp
    customer(id: String!): Customer
  }

  type Address {
    id: String!
    title: String
    firstName: String
    lastName: String
    streetName: String
    streetNumber: String
    postalCode: Int
    city: String
    country: String
    phone: String
    mobile: String
    email: String
  }

  type User {
    typeId: String
    id: String
  }

  type CustomerLastModifiedBy {
    clientId: String
    isPlatformClient: Boolean
    user: User
  }

  type CustomerCreatedBy {
    clientId: String
    isPlatformClient: Boolean
  }

  type Custom {
    type: CustomType
    typeRef: CustomTypeRef
  }

  type CustomTypeRef  {
    id: String
    typeId: String
  }

  type CustomType {
    key: String
    name: String
    description: String
  }

  type CustomerGroup {
    id: String!
    version: Int!
    name: String!
    key: String!
    createdAt: String
    lastModifiedAt: String
    custom: Custom      
  }

  type CustomerGroupRef {
    id: String
    typeId: String
  }

  type Customer {
    id: String!
    key: String
    email: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String
    customerNumber: String
    addresses: [Address!]
    defaultShippingAddressId: String
    defaultBillingAddressId: String
    shippingAddressIds: [String!]
    billingAddressIds: [String!]
    isEmailVerified: Boolean
    customerGroupRef: CustomerGroupRef
    externalId: String
    authenticationMode: String
    title: String
    locale: String
    salutation: String
    companyName: String
    vatId: String
    version: Int!
    versionModifiedAt: String!
    lastMessageSequenceNumber: Int
    createdAt: String!
    lastModifiedAt: String
    password: String
    lastModifiedBy: CustomerLastModifiedBy
    createdBy: CustomerCreatedBy
  }

  type GetCustomersResp {
    limit: Int
    offset: Int
    count: Int
    total: Int
    results:[Customer!]
  }
`;

module.exports = { typeDefs };