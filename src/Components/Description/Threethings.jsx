import { useState } from "react";
import "./three.css";

const Threethings = () => {
  
   
  const [activeTab, setActiveTab] = useState("description");
  const renderTabContent = ({ activeTab }) => {
    switch (activeTab) {
      case "details":
        return (
          <div className="common-para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              voluptates! Suscipit voluptates sint dolore architecto ducimus ab
              ipsum veniam expedita similique recusandae voluptatibus quis error
              laborum soluta reprehenderit placeat explicabo veritatis,
              asperiores quia? Laboriosam eligendi unde officia consequatur
              architecto at ratione eveniet, iusto illum suscipit.
            </p>
          </div>
        );
      case "description":
        return (
          <div className="common-para">
            <p>
              GeeksforGeeks: A Computer Science portal for geeks. It contains
              well written, well thought and well explained computer science,
              programming articles and quizzes. It provides a variety of
              services for you to learn, so thrive and also have fun! Free
              Tutorials, Millions of Articles, Live, Online and Classroom
              Courses, Frequent Coding Competitions, Webinars by Industry
              Experts, Internship opportunities, and Job Opportunities.
              Knowledge is power!
            </p>
          </div>
        );
      case "comments":
        return (
          <div className="common-para">
            <p>
              GeeksforGeeks: A Computer Science portal for geeks. It contains
              well written, well thought and well explained computer science,
              programming articles and quizzes. It provides a variety of
              services for you to learn, so thrive and also have fun! Free
              Tutorials, Millions of Articles, Live, Online and Classroom
              Courses, Frequent Coding Competitions, Webinars by Industry
              Experts, Internship opportunities, and Job Opportunities.
              Knowledge is power!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
      <div className="component-parent">
        <div className="heading-part-details">
          <div
            className={`description-details common-name ${
              activeTab === "description" && "active-tab"
            }`}
            onClick={() => setActiveTab("description")}
          >
            <h1>DESCRIPTION</h1>
          </div>
          <div
            className={`details-part common-name ${
              activeTab === "details" && "active-tab"
            }`}
            onClick={() => setActiveTab("details")}
          >
            <h1>DETAILS</h1>
          </div>
          <div
            className={`comments-part common-name ${
              activeTab === "comments" && "active-tab"
            }`}
            onClick={() => setActiveTab("comments")}
          >
            <h1>COMMENTS</h1>
          </div>
        </div>
        <hr className="horizontal-line-tag" />
        <div className="paragraph-details">
          {renderTabContent({ activeTab })}
        </div>
      </div>
  );
};
export default Threethings;
