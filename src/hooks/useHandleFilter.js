import { useDispatch } from "react-redux/es/exports";
import { getFilteredProducts } from "../features/productsSlice";
export const useHandleFilter = () => {
  const dispatch = useDispatch();
  return (e) => {
    if (e.target.tagName === "A") {
      if (e.target.classList.contains("active")) return;
      const btns = document.querySelectorAll("a[data-filter]");
      btns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      dispatch(getFilteredProducts(e.target.dataset.filter));
    }
  };
};
