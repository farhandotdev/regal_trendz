import React from 'react'
import "./Card1.css"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import cardimage from "../../assets/t6.webp"
const Card1 = () => {
    return (

        <div className="cardcontainer">
            <div className='card-box'>

                <div className="image-card">
                    <img src={cardimage} alt="" />
                    <div className="card-icon">
                    </div>
                    <div className="card-hover-box">
                        <div className="card-hover-element">
                            <FavoriteBorderIcon className="like-icon" fontSize="small" />
                            <LocalMallIcon className="like-icon  shopping-bag-icon" fontSize="small" color="success" />
                        </div>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="card-details">
                    <div className="product-title">

                        <h4>Men Lightly Washed Skinny Jeans</h4>
                    </div>
                    <div className='card-price-off'>
                        <p>766Rs <i style={{ textDecoration: "line-through" }}>1420Rs</i> (45% off) </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Card1
