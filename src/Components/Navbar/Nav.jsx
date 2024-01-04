import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./Nav.css"
function Nav() {
  function NewMenu() {
    var content = document.getElementById("nav-box5");
      var iconshow = document.getElementById("nav-box3");
    if (content.style.display == "none") {
      content.style.display = "flex ";
      iconshow.style.display = "none";
    }
    else {
      content.style.display = "none";
      iconshow.style.display = "flex";
    }

  }


  return (
    <div className='Navbar'>
      <div className="Navbar-components nav-box1">
        <h1>Logo</h1>
      </div>
      <div className="Navbar-components nav-box2">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Men's</a></li>
          <li><a href="">Women's</a></li>
          <li><a href="">Kid's</a></li>
        
        </ul>
      </div>
      <div className="Navbar-components nav-box3" id='nav-box3' >
        <div className="search icon"><SearchIcon /></div>
        <div className="user icon"><PersonIcon /></div>
        <div className="addcard icon" ><ShoppingCartIcon /> </div>
      </div>
      <div className="Navbar-components nav-box4" onClick={NewMenu}><MenuIcon /></div>
      <div className="nav-box5" id='nav-box5'>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Men's</a></li>
          <li><a href="">Women's</a></li>
          <li><a href="">Kid's</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;


