
exports.Query= {
    hello: () => {
      console.log("Hello this is your graphiql hello world!!");
      return "Ndagukunda graphql uzankorera umuti!!";
    },
    products: (parent,{filter},{products}) => {
      let filteredProducts = products;
      console.log("Hello Am Getting Products")
      if(filter){
        if(filter.onSale === true){
          console.log("we are in Filtering Mode!!")
           filteredProducts= filteredProducts.filter(prev=>{
            return prev.onSale
           })
        }
      }
      return filteredProducts;
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