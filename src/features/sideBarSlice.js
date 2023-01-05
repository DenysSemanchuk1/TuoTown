import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: () => {
      return true;
    },
    closeSidebar: () => {
      return false;
    },
  },
});

export default sidebarSlice.reducer;
export const { openSidebar, closeSidebar } = sidebarSlice.actions;
