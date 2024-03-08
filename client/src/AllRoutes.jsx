import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Login from "./Pages/Login/Login";
import ProductPage from "./Components/Product/ProductPage";
import Checkout from "./Pages/CheckoutPage/Checkout";
import CartProduct from "./Components/CartProduct/CartProduct";
import PaymentProcess from "./Components/Checkout/PaymentProcess";
import { failedPayment,successPayment, loadingPayment} from "./assets/index";
import ProfilePage from "./Pages/UserProfilePage/ProfilePage";
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
      <Route path="/c" element={<Checkout />} />
      <Route path="/Cart" element={<CartProduct />} />
      <Route path="/Processing" element={<PaymentProcess lottiename={loadingPayment} color={"#ae811c"} title ={"Your payment is on Processing"} />} />
      <Route path="/Sucessful" element={<PaymentProcess  lottiename={successPayment}title={"Your payment is Sucessful"} color={"green"} />} />
      <Route path="/Cancle" element={<PaymentProcess lottiename={failedPayment} title={"Your payment is Failed"} color={"red"} />} />
      <Route path="UserProfile" element = { <ProfilePage/>} />

    </Routes>
  );
};

export default AllRoutes;
