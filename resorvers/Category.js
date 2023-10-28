exports.Category= {
    productsForCategory: ({id:categoryParentId}, args, {products}) => {

      return products.filter((prev)=>prev.categoriesId === categoryParentId);
    },
  }