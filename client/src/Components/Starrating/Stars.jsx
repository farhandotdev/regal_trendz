import ReactStars from "react-stars";
import React from "react";

const Stars = ({review}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    // You can perform additional actions with the new rating if needed
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={"#2c4152"}
      value={review}
      edit={false}
    />
  );
};

export default Stars;
