import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Nav.css";
function Nav({ handleNavigation }) {
  const [isSticky, setIsSticky] = useState(true);
  useEffect(() => {
    setIsSticky(true);
  }, []);

  return (
    <div className={`navbar-container ${isSticky ? "sticky" : ""}`}>
      <div className="navbar-navigation">
        <div className="navbar-logo">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h1>RegalTrendZ</h1>
          </Link>
        </div>
        <div className="navbar-icons">
          <p className="profile_icon">
            <PersonIcon style={{ cursor: "pointer" }} />
          </p>

          <Link
            to={"/cartPage"}
            style={{ textDecoration: "none", color: "#2c4152" }}
          >
            <p className="cart_icon">
              <ShoppingCartIcon style={{ cursor: "pointer" }} />
            </p>
          </Link>

          <p className="fav_icon">
            <FavoriteIcon style={{ cursor: "pointer" }} />
          </p>
        </div>
      </div>
      <div className="navbar-search-items-navigation">
        <div className="search-items">
          <input type="text" placeholder="SEARCH REAGALTENDZ..." />{" "}
          <SearchIcon style={{ marginRight: "5px", cursor: "pointer" }} />
        </div>
        <div className="navigation-items">
          <ul>
            <Link to={"/"} style={{ textDecoration: "none", color: "#2c4152" }}>
              <li onClick={(e) => handleNavigation("/")}>HOME</li>
            </Link>
            <li onClick={(e) => handleNavigation("men")}>MEN</li>
            <li onClick={(e) => handleNavigation("women")}>WOMEN</li>
            <li onClick={(e) => handleNavigation("kids")}>KIDS</li>
          </ul>
        </div>
      </div>

      {/* <div className="Navbar-components nav-box4" onClick={NewMenu}>
        <MenuIcon />
      </div>
      <div className="nav-box5" id="nav-box5">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Men's</a>
          </li>
          <li>
            <a href="">Women's</a>
          </li>
          <li>
            <a href="">Kid's</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Nav;
