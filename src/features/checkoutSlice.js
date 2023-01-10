import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  tel: "",
  email: "",
};
const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setValue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      return state;
    },
  },
});

export default checkoutSlice.reducer;
export const {setValue} = checkoutSlice.actions;
