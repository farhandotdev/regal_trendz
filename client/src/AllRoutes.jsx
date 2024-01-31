import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/Login";
import ProductPage from "./Components/Product/ProductPage";
import Checkout from "./Pages/CheckoutPage/Checkout";
import CartProduct from "./Components/CartProduct/CartProduct";


const AllRoutes = ({ navigation }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      if ("scrollBehavior" in document.documentElement.style) {
        // Use smooth scrolling if supported
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Fallback to traditional scrolling
        window.scrollTo(0, 0);
      }
    } catch (error) {
      // Fallback to traditional scrolling in case of any error
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);
  return (
    <Routes>
      <Route path="/" element={<HomePage navigation={navigation} />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/productItemPage" element={<ProductPage />} />
      <Route path = "/c" element={<Checkout/>}/>
      <Route path = "/Cart" element={<CartProduct/>}/>
    </Routes>
  );
};

export default AllRoutes;
