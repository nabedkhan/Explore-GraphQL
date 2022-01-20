const { ApolloServer, gql } = require("apollo-server");
const products = require("./db/products");
const categories = require("./db/categories");
const reviews = require("./db/reviews");
const { typeDefs } = require("./schema");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Product = require("./resolvers/Product");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Product },
  context: { products, categories, reviews },
});

server.listen().then(({ url }) => {
  console.log(`server listening on port ${url}`);
});
