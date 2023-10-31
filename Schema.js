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
  type Mutation{
    addCategory(input:AddCategoryInput):Category!
    addProduct(input:AddProductInput):Product!
    addReview(input:AddReviewInput):Review!
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

  input AddProductInput{
    name: String!
    price: Float!
    description: String!
    onSale: Boolean!
    image: String
  }

  input inputProduct{
    name: String!
    price: Float!
    description: String!
    onSale: Boolean!
    image: String
  }

  type Category {
    id: ID!
    name: String!
    productsForCategory(filter:filterProductsInput): [Product]
  }

  input AddCategoryInput{
    name:String
  }

  type Review{
    id:ID!
    date:String!
    title:String!
    comment:String!
    rating:Int!
  }

  input AddReviewInput {
    date:String!
    title:String!
    comment:String!
    rating:Int!
  }
  input filterProductsInput{
    onSale:Boolean
    onAverageReview:Int
  }
`;