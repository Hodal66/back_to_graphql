
exports.Query= {
    hello: () => {
      console.log("Hello this is your graphiql hello world!!");
      return "Ndagukunda graphql uzankorera umuti!!";
    },
    products: (parent,args,{products}) => {
      return products;
    },
    productDetail: (parent, {id:myProductId}, {products}) => {
  
      const newProduct = products.find((prev) => prev.id === myProductId);
      if (newProduct) {
        return newProduct;
      } else {
        return null;
      }
    },
    //This is query for all categories
    categories: (parent, args, {categoriesDb}) => {
      return categoriesDb;
    },
    categoriesDetail: (parent, {id}, {categoriesDb}) => {
      const choosenCategory = categoriesDb.find((prev) => prev.id === id);
      if (!choosenCategory) return null;
      return choosenCategory;
    },
  }