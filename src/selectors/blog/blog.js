export const selectBlogSlice = (store) => store.blog;

export const selectBlogSingleItem = (store, id) => {
  return selectBlogSlice(store).find(({ _id }) => _id == id);
};
