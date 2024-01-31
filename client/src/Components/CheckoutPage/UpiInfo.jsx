import React from 'react';

const UpiInfo = (props) => {
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
                <button onClick={props.CheckoutBack}>Back</button>
                <button type='submit'>Pay</button>
            </div>
        </form>
    );
}

export default UpiInfo;
