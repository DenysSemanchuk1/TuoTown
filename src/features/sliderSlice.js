import { createSlice } from "@reduxjs/toolkit";
import { sliderImage1 } from "../assets/img/slider";
// link, title, descr, image
const initialState = [
  {
    _id: 1,
    link: "/catalog",
    title: "Исключительное качество без компромиссов",
    descr:
      "Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    image: sliderImage1,
  },
  {
    _id: 2,
    link: "/catalog",
    title: "Исключительное качество без компромиссов",
    descr:
      "Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    image: sliderImage1,
  },
  {
    _id: 3,
    link: "/catalog",
    title: "Исключительное качество без компромиссов",
    descr:
      "Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    image: sliderImage1,
  },
  {
    _id: 4,
    link: "/catalog",
    title: "Исключительное качество без компромиссов",
    descr:
      "Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства",
    image: sliderImage1,
  },
];
const sliderSlice = createSlice({
  name: "slider",
  initialState,
});

export default sliderSlice.reducer;
export const {} = sliderSlice.actions;
