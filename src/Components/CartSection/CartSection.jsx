import React from "react";
import "./CartSection.css";
import Card2 from "./CartDisplayCard";
const CartSection = () => {
  return (
    <>
      <div id="Addtocard">
        <div className="cart-totalItem">
          <p>Your Cart (11)</p>
        </div>
        <div className="inputbox">
          <div className="itembox" id="itembox">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
          <div className="Item-payment">
            <div className="Item-Payment-detail">
              <p>
                Total Items : <span>11</span>
              </p>
              <p>
                Total Price : <span> 5120</span>
              </p>
              <p>
                Shipping : <span>Free</span>
              </p>
            </div>
            <button className="item-btn">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
