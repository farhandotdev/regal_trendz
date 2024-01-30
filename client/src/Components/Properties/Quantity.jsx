import React from "react";
import "./common.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { cilPlus } from "@coreui/icons";
import { cilMinus } from "@coreui/icons";


const Quantity = ({ backGround }) => {
  const [quantity, setquantity] = useState(1);
  function increament() {
    setquantity(quantity + 1);
  }
  function decreament() {
    if (quantity > 1) setquantity(quantity - 1);
  }

  return (
    <div id="quantity-id">
      <div className="block-quantity"style={{backgroundColor:backGround}}>
        <div className="reduce-icon">
          <RemoveIcon
            className="icon"
            fontSize="medium"
            color="white"
            onClick={decreament}
          />
        </div>
        <div className="Number-items">
          <h5>{quantity}</h5>
        </div>
        <div className="add-icon">
          <AddIcon
            className="icon"
            fontSize="large"
            color="white"
            onClick={increament}
          />
        </div>
      </div>
    </div>
  );
};

export default Quantity;
