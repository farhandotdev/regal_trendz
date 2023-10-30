import React from "react";
import "./filter.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Filter = () => {
  return (
    <div className="filter-section-main-class">
      <div className="filter-parent">
        <div className="filter-part-child">
          <div className="heading-part-filter">
            <h3>Filters</h3>
          </div>
          <hr className="hr-tag" color="gray" />
          <div className="category-parent">
            <div className="category-main-child">
              Category
              <ArrowDropDownIcon className="drop-down-icon" />
            </div>
            <div className="category-part-search-part">
              <input type="text" placeholder="Search.." />
              <span className="span-search-part">
                <SearchOutlinedIcon className="search-icon-search-part" />
              </span>
            </div>
            <div className="list-items-category-part">
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox"
                />
                <label htmlFor="newcheckbox">Shirts</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox1"
                />
                <label htmlFor="newcheckbox1">Kurti</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox2"
                />
                <label htmlFor="newcheckbox2">Caps</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox3"
                />
                <label htmlFor="newcheckbox3">Saree</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox4"
                />
                <label htmlFor="newcheckbox4">T-Shirts</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox5"
                />
                <label htmlFor="newcheckbox5">Vest</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox6"
                />
                <label htmlFor="newcheckbox6">Jeans</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox7"
                />
                <label htmlFor="newcheckbox7">Women Suite</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox8"
                />
                <label htmlFor="newcheckbox8">Formal</label>
              </div>
              <div className="input-checkbox-category-part">
                <input
                  type="checkbox"
                  className="input-checkbox"
                  id="newcheckbox9"
                />
                <label htmlFor="newcheckbox9">Trouser & Pants</label>
              </div>
            </div>
            <div className="Gender-parent-category">
               <div className="Gender-main-child">
                Gender Class
                <ArrowDropDownIcon className="drop-down-icon" />
                </div>
                <div className="gender-section-buttons">
                  <div className="first-section-buttons">
                    <button className='gender-btn'>
                      Men's
                    </button>
                    <button className='gender-btn'>
                      Women's
                    </button>
                  </div>
                  <div className="first-section-buttons">
                    <button className='gender-btn'>
                      Kids
                    </button>
                    <button className='gender-btn'>
                      Other's
                    </button>
                  </div>
                </div>

            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
