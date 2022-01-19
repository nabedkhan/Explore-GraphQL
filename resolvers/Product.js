const Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    const { categories } = context;
    return categories.find((category) => category.id === categoryId);
  },
};

module.exports = Product;
