import React from "react";
import "./DisplayCard.css";

import item from "../../assets/t6.webp";
import item1 from "../../assets/t11.webp";
const DisplayCard = () => {
    return (
        <div className="card-container">
            <div className="cardItem-img">
                <img src={item1} alt="" />
            </div>
            <div className="cardItem-desc">
                <p className="cardItem-title">Lightly Washed Straight Fit Jeans</p>
                <p className="cardItem-Pricing">
                    Price: &#8377;399
                    <i style={{ textDecoration: "line-through", fontWeight: "400", marginLeft:"5px" }}>
                        &#8377;845
                    </i>
                    <span
                        style={{ color: "green", fontWeight: "bold", fontSize: "10px" }}
                    >
                        ( 20% off)
                    </span>

                </p>
                <p className="item-offerPrice">Offer Price: &#8377;299</p>
            </div>
            <div className="card-Navigation">
                
            </div>
        </div>
    );
};

export default DisplayCard;
