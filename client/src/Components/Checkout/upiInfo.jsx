import React from 'react';

const UpiInfo = ({upiCheckState}) => {
    return (
        <form action="#">
            <div className="form-row" >
                <div className="input-data">
                    <input type="text" required />
                    <div className="underline" />
                    <label htmlFor>Enter UPI Id</label>
                </div>
            </div>

            <div className="payment-submit-btn">
                <button onClick={(e)=>upiCheckState("Shipping")}>Back</button>
                <button type='submit'>Pay</button>
            </div>
        </form>
    );
}

export default UpiInfo;
