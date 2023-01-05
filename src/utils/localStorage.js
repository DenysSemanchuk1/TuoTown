export const getFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  }
  return [];
};
export const modifyItemsInLocalStorage = (items) => {
  const json = JSON.stringify(items);
  localStorage.setItem("cart", json);
};
