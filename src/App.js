import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Blog } from "./pages/Blog";
import { Catalog } from "./pages/Catalog";
import { Service } from "./pages/Service";
import { Product } from "./pages/Product";
import { Map } from "./pages/Map";
import { Cart } from "./pages/Cart";
import { SingleBlog } from "./pages/SingleBlog";
import { SideBar } from "./components/SideBar";
import { useDispatch } from "react-redux/es/exports";
import { closeSidebar } from "./features/sideBarSlice";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/Error";
import { Checkout } from "./pages/Checkout";

export const App = () => {
  const dispatch = useDispatch();
  dispatch(closeSidebar());
  return (
    <>
      <Header />
      <SideBar />
      <ScrollToTop />
      <Routes>
        <Route path='blog' element={<Blog />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='blog/:id' element={<SingleBlog />} />
        <Route path='service' element={<Service />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='catalog/:filter' element={<Catalog />} />
        <Route path='products/:id' element={<Product />} />
        <Route path='map' element={<Map />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
