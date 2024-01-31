import React, {useState} from "react";
import "./Check.css";
import CartSection from "../../Components/CartSection/CartSection";
import ShipingInfo from "../../Components/Checkout/ShipingInfo";
import PaymentInfo from "../../Components/Checkout/PaymentInfo";

const Checkout = () => {
  const [checkout, setCheckout] = useState("Shipping");
  const CheckoutNext = (e) => {
    setCheckout(e);
  };
  console.log(checkout);

  return (
    <div className="checkout-container">
      {checkout === "Shipping" ? (
        <>
          <ShipingInfo chekout={CheckoutNext} />
        </>
      ) : (
        <PaymentInfo chekout={CheckoutNext} />
      )}

      <div className="product-payment">
        <CartSection />
      </div>
    </div>
  );
};

export default Checkout;
