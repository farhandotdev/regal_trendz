import React, { useState, useEffect } from "react";
import "./FilterSection.css";
import { Link } from "react-router-dom";
import Filter from "../../Components/CategoryFilter/Filter";
import DisplayCard from "../Cards/DisplayCard";
import product_items from "../../data.json";

const FilterSection = () => {
  const [products, setProducts] = useState(product_items.products);

  return (
    <div className="FilterSec-container">
      <div className="category-filter">
        <Filter />
      </div>
      <div className="card-display-section">
        <p className="total-item">20,093 Items Found</p>
        <div className="CardPart">
          {products.map((product, index) => (
            <Link key={index} to={`/productItemPage`} style={{ textDecoration: "none", color: "black" }}>
              <DisplayCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
