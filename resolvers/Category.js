const Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id;
    const { products, reviews } = context;
    const { filter } = args;

    const filteredCategoryProducts = products.filter(
      (product) => product.categoryId === categoryId
    );

    let filteredProducts = filteredCategoryProducts;

    if (filter && (filter.onSale || filter.onSale === false)) {
      filteredProducts = filteredProducts.filter((product) => product.onSale === filter.onSale);
    }

    if (filter && filter.avgRating) {
      const ratingValues = [1, 2, 3, 4, 5];
      const findFromRatingValues = ratingValues.includes(filter.avgRating);
      if (findFromRatingValues) {
        filteredProducts = filteredProducts.filter((product) => {
          const filteredReviews = reviews.filter((item) => item.productId === product.id);
          const reviewsAmount = filteredReviews.reduce((prev, curr) => prev + curr.rating, 0);
          const avgRating = reviewsAmount / filteredReviews.length;
          return avgRating >= filter.avgRating;
        });
      }
    }

    return filteredProducts;
  },
};

module.exports = Category;
