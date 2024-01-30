import React from "react";
import './rating.css'
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Rating = ({ rating, numReviews }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar key={i} color="black" />);
    }

    if (hasHalfStar) {
      stars.push(<IoIosStarHalf key="half" color="black" />);
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<IoIosStar key={`empty-${i}`} color="grey" />);
    }

    return stars;
  };

  return (
    <div className="rating">
      <div className="stars"> <p style={{fontSize:"12px", textAlign:"center"}} className="num-reviews">{`(${numReviews} Review${numReviews !== 1 ? "s" : ""})`}</p> <span>{renderStars()}</span> </div>
      
    </div>
  );
};

export default Rating;
