import { useState } from 'react';
import "./Checkout.css";
import CartSection from '../CartSection/CartSection';
import ShipingInfo from './ShipingInfo';
import PaymentInfo from './PaymentInfo';

const Checkout = () => {
    const [checkout, setCheckout] = useState("Shipping")
    const CheckoutNext = () => {
        setCheckout("Payment");
    }
    const CheckoutBack = () => {
        setCheckout("Shipping");
    }
    return (
        <div className='checkout-container'>
            {
                checkout === "Shipping" ? <> <ShipingInfo CheckoutNext={CheckoutNext} /></> : <PaymentInfo CheckoutBack={CheckoutBack} />
            }     

            <div className="product-payment">
                <CartSection />
            </div>
        </div>
    );
}

export default Checkout;


