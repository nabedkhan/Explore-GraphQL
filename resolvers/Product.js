const Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    const { categories } = context;
    return categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, args, context) => {
    const { id } = parent;
    const { reviews } = context;
    return reviews.filter((review) => review.productId === id);
  },
};

module.exports = Product;
