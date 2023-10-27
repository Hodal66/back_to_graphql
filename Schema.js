const { gql } = require("apollo-server");


exports.typeDefs = gql`
  type Query {
    hello: String
    allThingsWeLike: [String!]!
    products: [Product!]!
    productDetail(id: ID!): Product
    categories: [Category!]!
    categoriesDetail(id: ID!): Category
  }

  type Product {
    id: String
    name: String!
    price: Float!
    description: String!
    onSales: Boolean
    image: String
    categoryForProduct:Category
  }

  type Category {
    id: ID!
    name: String!
    productsForCategory: [Product!]!
  }
`;