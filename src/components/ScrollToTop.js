import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { closeSidebar } from "../features/sideBarSlice";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname.startsWith("/catalog/")) {
      window.scrollTo(0, window.innerHeight - 80);
      dispatch(closeSidebar());

      return;
    }
    window.scrollTo(0, 0);
    dispatch(closeSidebar());
  }, [pathname]);

  return null;
}
