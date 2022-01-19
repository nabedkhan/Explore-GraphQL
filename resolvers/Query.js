const Query = {
  products: (parent, args, context) => {
    const { products } = context;
    return products;
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
