import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import "./three.css";
import Stars from "../Starrating/Stars";

const Threethings = () => {
  const reviewData = [
    {
      Username: "Ram",
      Quality: "Good",
      review: 3,
      dateofReview: "25d dec 2023",
      comments: "The item is too good ",
    },
    {
      Username: "shyam",
      Quality: "Gajab",
      review: 5,
      dateofReview: "25 Mar 2023",
      comments: "Quite Different",
    },
    {
      Username: "hari",
      Quality: "Splendid",
      review: 4,
      dateofReview: "22 jan 2024",
      comments: "Ram Ram ji",
    },
    {
      Username: "JayRam",
      Quality: "Not Good",
      review: 2,
      dateofReview: "2 feb 2023",
      comments: "Bakwas",
    },
    {
      Username: "Laxman",
      Quality: "Excellent",
      review: 5,
      dateofReview: "12  jan 2023",
      comments: "the cloth quality is too different",
    },
  ];
  return (
    <div className="component-parent">
      <div className="heading-part">
        <h1>Description</h1>
        <h1>Comments</h1>
      </div>
      <div className="tab-parent-part">
        <div className="tab1-description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            temporibus deleniti autem veritatis, totam atque soluta? Aliquam,
            autem dignissimos. Non dicta consequatur ipsam numquam aliquam ullam
            aspernatur laborum accusamus, dignissimos eligendi. Mollitia,
            suscipit culpa? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Cupiditate, est? Alias accusantium fugiat ea repellendus eum
            aliquid iure et iste ad. Aliquid, sint!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
        
          </p>
        </div>
        <div className="tab2-comments">
          <div className="heading-review">
            <h5>Top Reviews From India</h5>
          </div>
          {reviewData.map((item) => (
            <div className="tab2-child">
              <div className="username-icon">
                <span className="icon-user">
                  <RiAccountCircleLine />
                </span>
                <span className="username">{item.Username}</span>
              </div>
              <div className="star-reviews">
                <span className="stars">
                  <Stars review={item.review} />
                </span>

                <span className="Quality-product">
                  <h3>{item.Quality}</h3>
                </span>
              </div>
              <div className="date-review">
                <p>Reviewed in India on {item.dateofReview}</p>
              </div>
              <div className="Comments-part">
                <p>{item.comments}</p>
              </div>
              <div className="buttons-help">
                <button>helpful</button>
                <button>Report</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Threethings;
