const { gql } = require("apollo-server");


exports.typeDefs = gql`
  type Query {
    hello: String
    allThingsWeLike: [String!]!
    products(filter:filterProductsInput): [Product!]!
    productDetail(id: ID!): Product
    categories: [Category!]!
    categoriesDetail(id: ID!): Category
  }

  type Product {
    id: String
    name: String!
    price: Float!
    description: String!
    onSale: Boolean!
    image: String
    reviews:[Review]!
    categoryForProduct:Category
  }

  type Category {
    id: ID!
    name: String!
    productsForCategory(filter:filterProductsInput): [Product!]!
  }
  type Review{
    id:ID!
    date:String!
    title:String!
    comment:String!
    rating:Int!
  }
  input filterProductsInput{
    onSale:Boolean
  }
`;