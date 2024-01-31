import { useState } from 'react';
import "./Checkout.css"
import DebitcardInfo from './DebitcardInfo';
import MobilePayInfo from './MobilePayInfo';
import UpiInfo from './UpiInfo';
const PaymentInfo = () => {
  const [toggle, setToggle] = useState('debitCardInfo');
  const Togglebutton = (e) => {
    setToggle(e);
  }


  return (

    <div className='Payment-container '>
      <h3>Payment Method</h3>
      <div className="payment-method-container">
        <div className="payment-method" onClick={(e) => Togglebutton('debitCardInfo')}>Credit/Debit Card <div className='bottem-line'></div></div>
        <div className="payment-method" onClick={(e) => Togglebutton('mobileInfo')}>Mobile Pay<div className='bottem-line'></div></div>
        <div className="payment-method" onClick={(e) => Togglebutton('upi')}>Using UPI<div className='bottem-line'></div></div>
      </div>

      {/* ******************* diffrent type of payment mode********************************** */}

      {
        toggle === 'debitCardInfo' ? <DebitcardInfo /> : (toggle === 'mobileInfo' ?
          <MobilePayInfo /> : <UpiInfo/>)
      }
      
    </div>
  );
}

export default PaymentInfo;
