const {categoriesDb} = require("../db")
 
 exports.Product={
    categoryForProduct:(parent,args,context)=>{
      console.log(parent);
      const categoryForProductParentId = parent.categoriesId;
      return categoriesDb.find(category=>category.id === categoryForProductParentId);
    }
  }