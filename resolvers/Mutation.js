const { v4: uuid } = require("uuid");
const Mutation = {
  addNewCategory: (parent, args, context) => {
    const { name } = args.data;
    const { categories } = context;
    const newCategory = { id: uuid(), name };
    categories.push(newCategory);
    return newCategory;
  },
  deleteCategory: (parent, args, context) => {
    const { id } = args;
    const { categories } = context;
    const findIndex = categories.findIndex((item) => item.id === id);
    categories.splice(findIndex, 1);
    return categories;
  },
};

module.exports = Mutation;
