import React, { useState, useEffect } from "react";
import "./DisplayCard.css";
import { getProducts } from "../../API";
import item from "../../assets/t6.webp";
import item1 from "../../assets/t11.webp";
const DisplayCard = () => {
  // const [products, setProducts] = useState([]);
  // const fetchData = async () => {
  //   try {
  //     const response = await getProducts();
  //     setProducts(response);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log("products", products);
  // console.log("Product Images:", products.images);

  return (
    <div className="card-container">
      <div className="cardItem-img">
        <img src={item1} alt="" />
      </div>
      <div className="cardItem-desc">
        <p className="cardItem-title">Lightly Washed Straight Fit Jeans</p>
        <p className="cardItem-Pricing">
          Price: &#8377;399
          <i
            style={{
              textDecoration: "line-through",
              fontWeight: "400",
              marginLeft: "5px",
            }}
          >
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
      <div className="card-Navigation"></div>
    </div>
    // <div>
    //   {products.map((product, index) => (
    //     <div key={index} className="card-container">
    //       <div className="cardItem-img">
    //       <img src={`http://localhost:5000/uploads/${product.images[0]}`} alt={product.title} />
    //       </div>
    //       <div className="cardItem-desc">
    //         <p className="cardItem-title">{product.title}</p>
    //         <p className="cardItem-Pricing">
    //           Price: &#8377;{product.price}
    //           {product.discountedPrice && (
    //             <>
    //               <i style={{ textDecoration: "line-through", fontWeight: "400", marginLeft: "5px" }}>
    //                 &#8377;{product.originalPrice}
    //               </i>
    //               <span style={{ color: "green", fontWeight: "bold", fontSize: "10px" }}>
    //                 ( {product.discount}% off)
    //               </span>
    //             </>
    //           )}
    //         </p>
    //         {product.discountedPrice && (
    //           <p className="item-offerPrice">Offer Price: &#8377;{product.discountedPrice}</p>
    //         )}
    //       </div>
    //       <div className="card-Navigation"></div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default DisplayCard;
