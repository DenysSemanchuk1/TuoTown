import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";
import blogReducer from "./features/blogSlice";
import sidebarReducer from "./features/sideBarSlice";
import sliderReducer from "./features/sliderSlice";
import checkoutReducer from "./features/checkoutSlice";
import serviceReducer from "./features/serviceSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    blog: blogReducer,
    sidebar: sidebarReducer,
    slider: sliderReducer,
    checkout: checkoutReducer,
    service: serviceReducer,
  },
});
