import { createSlice } from "@reduxjs/toolkit";
import {
  modifyItemsInLocalStorage,
  getFromLocalStorage,
} from "./../utils/localStorage";
const initialState = {
  items: getFromLocalStorage(),
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item._id === payload._id);
      if (item) {
        item.total += 1;
        modifyItemsInLocalStorage(state.items);
      } else {
        state.items.push({ ...payload, total: 1 });
        modifyItemsInLocalStorage(state.items);
      }
      return state;
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter(({ _id }) => _id !== payload);
      modifyItemsInLocalStorage(state.items);
      return state;
    },
    incrementItemTotal: (state, { payload }) => {
      let { _id, value } = payload;
      const item = state.items.find((item) => item._id === _id);
      value = +value;
      if (isNaN(value) || item.total >= 100 || item.total < 1) return;
      item.total = value;
      return state;
    },
    calculateTotal: (state, action) => {
      const totalPrice = state.items.reduce((total, item) => {
        return item.price * item.total;
      }, 0);
      return { ...state, totalPrice };
    },
  },
});
export const { addToCart, removeItem, incrementItemTotal, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
