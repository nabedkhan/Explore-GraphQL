const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    image: String!
    onSale: Boolean!
    category: Category!
    description: String!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

module.exports = {
  typeDefs,
};
