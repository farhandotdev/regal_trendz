import React from 'react'
import "./AddToCard.css"
import Card2 from './Card2'
const AddToCard = () => {
    return (
        <>
            <div id='Addtocard'>
                <div className="inputbox" >
                    <span>
                        <h4>Your Cart (11)</h4> 
                     </span>
                    <div className="itembox" id='itembox'>
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                        <Card2 />
                    </div>
                    <div className="Item-payment">
                      <div className="paymentinfo">
                      <span className='totaldetail'>
                        <h5>Total Product's</h5>
                        <h5>11</h5>
                      </span>
                        <span className='totaldetail'>
                        <h5>Total</h5>
                        <h5>Rs.4560</h5>
                        </span>
                        <span className='totaldetail'>
                            <h5>Shipping</h5>
                            <h5>Free</h5>
                        </span>
                      </div>
                        <button>Go To Buy</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddToCard
