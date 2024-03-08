import React from "react";
import{ phonpe,googlepay,paytm,amazon2 }from "../../assets/index";

const MobilePayInfo = ({ checkstate }) => {
  return (
    <div className="Mobile-pay-box">
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={phonpe} alt="" />
        </div>
        <label htmlFor="">Phonepe</label>
      </div>
      <div className="mobile-pay-app">
        <div className="image-icon paytm">
          <img src={paytm} alt="" />
        </div>
        <label htmlFor="">Paytm</label>
      </div>
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={amazon2} alt="" />
        </div>
        <label htmlFor="">Amazon Pay</label>
      </div>
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={googlepay} alt="" />
        </div>
        <label htmlFor="">Google Pay</label>
      </div>
      <div className="payment-submit-btn">
        <button onClick={(e) => checkstate("Shipping")}>Back</button>
        <button type="submit">Pay</button>
      </div>
    </div>
  );
};

export default MobilePayInfo;
