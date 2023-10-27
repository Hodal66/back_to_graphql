const {products,categoriesDb} = require("../db")

exports.Query= {
    hello: () => {
      console.log("Hello this is your graphiql hello world!!");
      return "Ndagukunda graphql uzankorera umuti!!";
    },
    products: () => {
      return products;
    },
    productDetail: (parent, args, context) => {
      console.log("My Id is :", args);
      const myProductId = args.id;
      const newProduct = products.find((prev) => prev.id === myProductId);
      if (newProduct) {
        return newProduct;
      } else {
        return null;
      }
    },
    //This is query for all categories
    categories: (parent, args, context) => {
      return categoriesDb;
    },
    categoriesDetail: (parent, args, context) => {
      const { id } = args;
      const choosenCategory = categoriesDb.find((prev) => prev.id === id);
      console.log("My categorie is : ", choosenCategory);
      if (!choosenCategory) return null;
      return choosenCategory;
    },
  }