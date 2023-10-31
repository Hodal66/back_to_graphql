exports.Category = {
  productsForCategory: ({ id: categoryParentId }, { filter }, { db }) => {
    filteredCategoryProducts = db.products.filter(
      (prev) => prev.categoriesId === categoryParentId
    );
    if (filter) {
      if (filter.onSale === true) {
        console.log("we are in Filtering Mode!!");
        filteredCategoryProducts = filteredCategoryProducts.filter((prev) => {
          return prev.onSale;
        });
      }
    }
    return filteredCategoryProducts;
  },
};