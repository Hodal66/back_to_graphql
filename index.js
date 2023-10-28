const { ApolloServer} = require("apollo-server");
const {products,categoriesDb,reviews} = require("./db")
const {Category} = require("./resorvers/Category")
const {Product} = require("./resorvers/Product")
const {Query} = require("./resorvers/Query")
const {typeDefs} =require("./Schema")
const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Product,
    Category
  },
  context:{
    products,
    categoriesDb,
    reviews
  }
});
server.listen(port).then(({ url }) => {
  console.log("Server is running At : ", url);
});
