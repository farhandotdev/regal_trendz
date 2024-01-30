import React, { useState } from "react";
import "./CartProduct.css";
import { IoAddSharp, IoRemoveOutline } from "react-icons/io5";
import productImg from "../../assets/Cart-Images/product.png";
import p2Img from "../../assets/Cart-Images/p2.png";
import p4Img from "../../assets/Cart-Images/p4.png";
import p3Img from "../../assets/Cart-Images/p3.png";
import p5Img from "../../assets/Cart-Images/p5.png";
import Quantity from "../Properties/Quantity";

const CartProduct = () => {
  const [check, setCheck] = useState(false);

  const onChange = () => {
    setCheck(!check); // Toggle the check state
  };

  const Dataproduct = [
    {
      img: productImg,
      name: "Polo shirt",
    },
    {
      img: p2Img,
      name: "Polo shirt",
    },
    {
      img: p4Img,
      name: "Polo shirt",
    },
    {
      img: p3Img,
      name: "Polo shirt",
    },
    {
      img: p5Img,
      name: "Polo shirt",
    },
  ];

  return (
    <div className="product-list-container">
      <div className="heading-product-list">
        <h4>Product List</h4>
      </div>
      <div className="primary-parent-list">
        <div className="heading-list-product">
          <input
            type="checkbox"
            name=""
            id=""
            checked={check}
            onChange={onChange}
          />
          <h5>Product</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
        </div>
        {Dataproduct.map((item) => (
          <div className="product-information-parent" key={item.name}>
            <div className="product-information">
              <input
                type="checkbox"
                name=""
                id=""
                checked={check}
                // onChange={onChange}
              />
              <div className="product-image-details">
                <img src={item.img} alt="" />
                <div className="details-product">
                  <h3>{item.name} </h3>
                  <h5>Color: Grey, S</h5>
                </div>
              </div>
              <h4>$120.0</h4>
              <div className="quantity">
                <Quantity backGround="#a6acb1" />
              </div>
              <h4>$120.0 </h4>
            </div>
            <hr className="horizontal-line" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProduct;
