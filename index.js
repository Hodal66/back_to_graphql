const { ApolloServer} = require("apollo-server");
const {db} = require("./database")
const {Category} = require("./resorvers/Category")
const {Product} = require("./resorvers/Product")
const {Mutation} = require("./resorvers/Mutation")
const {Query} = require("./resorvers/Query")
const {typeDefs} =require("./Schema")
const port = 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Product,
    Category,
    Mutation,
  },
  context:{
 db
  }
});
server.listen(port).then(({ url }) => {
  console.log("Server is running At :... ", url);
});
