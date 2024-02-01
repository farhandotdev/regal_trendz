import ReactStars from "react-stars";
import React from "react";

const Stars = ({review,touch}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
    // You can perform additional actions with the new rating if needed
  };

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      color2={"yellow"}
      value={review}
      edit={{touch}}
    />
  );
};

export default Stars;
