
  exports.Product={
    categoryForProduct:({categoriesId:categoryForProductParentId},args,{db})=>{

      return db.categoriesDb.find(category=>category.id === categoryForProductParentId);
    },
    reviews:({id},args,{db})=>{
      return db.reviews.filter(prev=>prev.productId === id);

    }
  }