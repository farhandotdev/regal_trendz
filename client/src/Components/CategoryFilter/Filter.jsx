import React, { useState } from "react";
import "./filter.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Filter = () => {
  const [isGenderDropdownOpen, setGenderDropdownOpen] = useState(false);

  const toggleGenderDropdown = () => {
    setGenderDropdownOpen(!isGenderDropdownOpen);
  };

  const catrgoryOfItems = [
    "Shirts",
    "Jeans",
    "Kurti",
    "Trousers & Pants",
    "T-Shirts",
    "Kurta"
  ];

  const genderCategory = ["Mens", "Womens", "Kids", "Others"];

  return (
    <div className="filter-container">
      <div className="filter-category">
        {/* Search Bar */}
        <div className="category-part-search-part">
          <input type="text" placeholder="search..." />
          <span className="span-search-part">
            <SearchOutlinedIcon className="search-icon-search-part" style={{cursor:"pointer"}}/>
          </span>
        </div>
        <div className="category-main-child">Category </div>
        {/* Categories Mapping */}
        <div className="list-items-category-part">
          {catrgoryOfItems.map((item) => (
            <div key={item} className="input-checkbox-category-part">
              <input
                type="checkbox"
                className="input-checkbox"
                id={`${item}-checkbox`}
              />
              <label htmlFor={`${item}-checkbox`}>{item}</label>
            </div>
          ))}
        </div>
        {/* Gender Categories Mapping */}
        <div className="Gender-parent-category">
          <div
            className="Gender-main-child"
            onClick={toggleGenderDropdown}
          >
            Gender Class{" "}
            {isGenderDropdownOpen ? (
              <ArrowDropDownIcon className="arrowdrop" style={{cursor:"pointer"}}/>
            ) : (
              <ArrowRightIcon className="arrowdrop" style={{cursor:"pointer"}}/>
            )}
          </div>
          {isGenderDropdownOpen && (
            <ul>
              {genderCategory.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
