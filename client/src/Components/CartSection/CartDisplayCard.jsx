import React from "react";
import "./CartSection.css";
import img from "../../assets/t11.webp";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const CartDisplayCard = () => {
  return (
    <div>
      <div className="item">
        <div className="images">
          <img src={img} id="img1" />
        </div>
        <div className="item-details">
          <h3>Men Brown white T-shirt For man</h3>
          <h4> Price: ₹799 </h4>
          <span className="add-rem">
            <h5>Qty : 2</h5>
            <AddIcon
              className="addicon"
              style={{ fontSize: "16px", marginInline: "8px" }}
            />
            <RemoveIcon
              className="addicon"
              style={{ fontSize: "16px", marginInline: "8px" }}
            />
          </span>
        </div>
        <div className="removeicon">
          <ClearIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default CartDisplayCard;
