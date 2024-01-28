import React from "react";
import "./FilterSection.css";
import { Link } from "react-router-dom";
import Filter from "../../Components/CategoryFilter/Filter";
import AddToCard from "../CartSection/CartSection";
import DisplayCard from "../Cards/DisplayCard";

const FilterSection = () => {
  return (
    <div className="FilterSec-container">
      <div className="FilterPart ">
        <div className="category-filter">
          <Filter />
        </div>
        <div className="card-display-section">
          <p className="total-item">20,093 Items Found</p>
          <div className="CardPart ">
            <Link to={'/productItemPage'}>
            <DisplayCard />
            </Link>
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
            <DisplayCard />
          </div>
        </div>
      </div>

      <div className="AddCardPart">
        <AddToCard />
        <div className="addpart">
          <h3>Advertisement</h3>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
