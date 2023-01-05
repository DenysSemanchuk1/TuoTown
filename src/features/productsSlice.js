import { createSlice } from "@reduxjs/toolkit";
import product2 from "../assets/img/categories/product-2.png";
import product1 from "../assets/img/categories/product-1.png";
const products = [
  {
    _id: 1,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 15,
    price: 900,
    category: "sharpener",
  },
  {
    _id: 2,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 12,
    price: 900,
    category: "kitchen",
  },
  {
    _id: 3,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 33,
    price: 900,
    category: "accessories",
  },
  {
    _id: 4,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 12,
    price: 900,
    category: "folding",
  },
  {
    _id: 5,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 17,
    price: 900,
    category: "kitchen",
  },
  {
    _id: 6,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 18,
    price: 900,
    category: "kitchen",
  },
  {
    _id: 7,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 36,
    price: 900,
    category: "kitchen",
    isNew: true,
  },
  {
    _id: 8,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 27,
    price: 900,
    category: "kitchen",
  },
  {
    _id: 9,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 45,
    price: 900,
    category: "kitchen",
  },
  {
    _id: 10,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 19,
    price: 900,
    category: "folding",
  },
  {
    _id: 11,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 93,
    price: 900,
    category: "folding",
  },
  {
    _id: 12,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 64,
    price: 900,
    category: "folding",
  },
  {
    _id: 13,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 54,
    price: 900,
    category: "folding",
  },
  {
    _id: 14,
    title: "Складной нож JJ001-TUO-B",
    image: product2,
    orders: 45,
    price: 900,
    category: "folding",
  },
  {
    _id: 15,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 47,
    price: 900,
    category: "accessories",
  },
  {
    _id: 16,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 55,
    price: 900,
    category: "accessories",
  },
  {
    _id: 17,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 38,
    price: 900,
    category: "accessories",
  },
  {
    _id: 18,
    title: "Складной нож SQ01-B",
    image: product1,
    orders: 88,
    price: 900,
    category: "accessories",
  },
];
const initialState = {
  allProducts: products,
  newProducts: [],
  popularProducts: [],
  filteredByCategory: [],
  isLoading: false,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getFilteredProducts: (state, action) => {
      state.isLoading = true;

      state.filteredByCategory = state.allProducts.filter(
        ({ category }) => category === action.payload
      );

      state.newProducts = state.allProducts.filter((product) => product.isNew);
      state.popularProducts = [...state.allProducts].sort(
        (a, b) => a.orders - b.orders
      );
      state.isLoading = false;
      return state;
    },
  },
});

export const { getFilteredProducts } = productsSlice.actions;
export default productsSlice.reducer;
