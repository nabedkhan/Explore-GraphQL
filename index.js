const { ApolloServer, gql } = require("apollo-server");
const products = require("./db/products");
const categories = require("./db/categories");
const reviews = require("./db/reviews");
const { typeDefs } = require("./schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Category, Product },
  context: { products, categories, reviews },
});

server.listen().then(({ url }) => {
  console.log(`server listening on port ${url}`);
});
