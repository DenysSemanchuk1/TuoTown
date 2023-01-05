export const selectProducts = (store) => store.products;
export const selectSingleProduct = (store, id) => {
  return selectProducts(store).allProducts.find((item) => item._id == id);
};
