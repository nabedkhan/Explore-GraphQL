const Query = {
  products: (parent, args, context) => {
    const { products, reviews } = context;
    const { filter } = args;

    let filteredProducts = products;

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
  product: (parent, args, context) => {
    const { id } = args;
    const { products } = context;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, context) => {
    const { categories } = context;
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    const { categories } = context;
    return categories.find((category) => category.id === id);
  },
};
module.exports = Query;
