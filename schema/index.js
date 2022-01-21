const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    products(filter: ProductFiltered): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addNewCategory(data: AddCategoryInput!): Category!
    deleteCategory(id: ID!): [Category!]!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    image: String!
    onSale: Boolean!
    reviews: [Review]
    category: Category!
    description: String!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductFiltered): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  input ProductFiltered {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }
`;

module.exports = {
  typeDefs,
};
