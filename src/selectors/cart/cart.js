export const selectCartSlice = (store) => store.cart;
export const selectCartItems = (store) => selectCartSlice(store).items