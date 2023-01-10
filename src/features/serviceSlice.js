import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "",
  name: "",
  email: "",
  tel: "",
  message: "",
};
const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setValue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      return state;
    },
  },
});

export default serviceSlice.reducer;

export const { setValue } = serviceSlice.actions;
