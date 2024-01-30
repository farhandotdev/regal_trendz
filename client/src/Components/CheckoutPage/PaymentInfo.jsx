import React from 'react';
import "./Checkout.css"
import  useState  from 'react';
import DebitcardInfo from './DebitcardInfo';
import MobilePayInfo from './MobilePayInfo';
const PaymentInfo = () => {
    // const [Toggle, setToggle]=useState(false);
    // const Togglebutton = ()=>{
          
    // }

  return (

    <div className='Payment-container '>
      <h3>Payment Method</h3>
      <div className="payment-method-container">
        <div className="payment-method" >Credit/Debit Card <div className='bottem-line'></div></div>
        <div className="payment-method">Mobile Pay<div className='bottem-line'></div></div>
        <div className="payment-method">Using UPI<div className='bottem-line'></div></div>
        <div className="payment-method">Paypal<div className='bottem-line'></div></div>
      </div>

      {/* ******************* for card payment mode.********************************** */}
      <DebitcardInfo/>

      {/* ********************** for mobile Pay mode ************************ */}

      <MobilePayInfo/>
    </div>
  );
}

export default PaymentInfo;
