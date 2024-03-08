import React from "react";
import "./MyWishlist.css";
import DisplayCard from "../../Cards/DisplayCard";

const MyWishlist = () => {
  return (
    <div className="wishlistdata">
      <h3>My WishList</h3>
      <div className="Wishlist-container">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
    </div>
  );
};

export default MyWishlist;
