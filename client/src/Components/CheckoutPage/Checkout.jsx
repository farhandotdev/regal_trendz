import React from 'react';
import "./Checkout.css";
import CartDisplayCard from '../CartSection/CartDisplayCard';
import CartSection from '../CartSection/CartSection';
import ShipingInfo from './ShipingInfo';
import PaymentInfo from './PaymentInfo';
const Checkout = () => {
    return (
        <div className='checkout-container'>
              <ShipingInfo/>
              {/* <PaymentInfo/> */}
            <div className="product-payment">
                <CartSection/>
            </div>
        </div>
    );
}

export default Checkout;


