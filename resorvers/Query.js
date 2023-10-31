
exports.Query= {
    hello: () => {
      console.log("Hello this is your graphiql hello world!!");
      return "Ndagukunda graphql uzankorera umuti!!";
    },
    products: (parent,{filter},{db}) => {
      let filteredProducts = db.products;
      console.log("Hello Am Getting Products")
      if(filter){
        if(filter.onSale === true){
          console.log("we are in Filtering Mode!!")
           filteredProducts= filteredProducts.filter(prev=>{
            return prev.onSale
           })
        }
        if([1,2,3,4,5].includes(filter.onAverageReview)){
          console.log("We hit on rating -----------")
          let sumOfViews =0;
          let AveraveHolder = 0;
          let count = 0;

          db.reviews.forEach(review => {
          
            count++
            sumOfViews = sumOfViews + review.rating;
              console.log("=>",review.title,":",review.rating)
  
          });
          AveraveHolder= sumOfViews / count;

          console.log("Sum Of All Reviews Are: ", sumOfViews);
          console.log("Sum of Average of review : ",AveraveHolder)
          filteredProducts=  db.reviews.filter(prev=>{
            return prev.rating
           })
        }
      }
      return filteredProducts;
    },
    productDetail: (parent, {id:myProductId}, {db}) => {
  
      const newProduct = db.products.find((prev) => prev.id === myProductId);
      if (newProduct) {
        return newProduct;
      } else {
        return null;
      }
    },
    //This is query for all categories
    categories: (parent, args, {db}) => {
      return db.categoriesDb;
    },
    categoriesDetail: (parent, {id}, {db}) => {
      const choosenCategory = db.categoriesDb.find((prev) => prev.id === id);
      if (!choosenCategory) return null;
      return choosenCategory;
    },
  }