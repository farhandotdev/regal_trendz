import React from "react";
import phonepe from "../../assets/phonepe.png";
import amazon from "../../assets/amazon-a.png";
import google from "../../assets/google-pay.png";
import paytm from "../../assets/paytm.png";
const MobilePayInfo = ({ checkstate }) => {
  return (
    <div className="Mobile-pay-box">
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={phonepe} alt="" />
        </div>
        <label htmlFor="">Phonepe</label>
      </div>
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={paytm} alt="" />
        </div>
        <label htmlFor="">Paytm</label>
      </div>
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={amazon} alt="" />
        </div>
        <label htmlFor="">Amazon Pay</label>
      </div>
      <div className="mobile-pay-app">
        <div className="image-icon">
          <img src={google} alt="" />
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
