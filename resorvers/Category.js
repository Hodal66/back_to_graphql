const {products} = require("../db")

exports.Category= {
    productsForCategory: (parent, args, context) => {
      console.log(parent);
      const categoryParentId = parent.id;
      console.log("Hello this is the parent category Id: ",categoryParentId)
      return products.filter((prev)=>prev.categoriesId === categoryParentId);
    },
  }