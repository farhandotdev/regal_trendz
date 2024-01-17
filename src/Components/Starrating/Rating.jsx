import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

const Rating = ({ rating, numReviews }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar key={i} color="blue" />);
    }

    if (hasHalfStar) {
      stars.push(<IoIosStarHalf key="half" color="blue" />);
    }

    const remainingStars = 5 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<IoIosStar key={`empty-${i}`} color="blue" />);
    }

    return stars;
  };

  return (
    <div className="rating" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="stars">{renderStars()}</div>
      <p className="num-reviews" style={{ marginTop: "16px" }}>{`(${numReviews} Review${numReviews !== 1 ? "s" : ""})`}</p>
    </div>
  );
};

export default Rating;
