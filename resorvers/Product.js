
  exports.Product={
    categoryForProduct:({categoriesId:categoryForProductParentId},args,{categoriesDb})=>{

      return categoriesDb.find(category=>category.id === categoryForProductParentId);
    },
    reviews:({id},args,{reviews})=>{
      return reviews.filter(prev=>prev.productId === id);

    }
  }