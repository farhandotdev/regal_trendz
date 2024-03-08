import React from 'react';
import "./Checkout.css"
import { failedPayment } from '../../assets/index';
import Lottie from 'lottie-react';
const PaymentProcess = (props) => {
    return (
        <div className='Process-container'>
            <div className="process-lottie">
                <Lottie className="lottie" animationData={props.lottiename} />
            </div>
            <h4 style={{color:props.color}}>{props.title}</h4>
        </div>
    );
}

export default PaymentProcess;
