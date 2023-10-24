import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Nav.css"
function Nav() {
  return (
    <div className='Navbar'>
      <div className="Navbar-components n1">
        <h1>Logo</h1>
      </div>
      <div className="Navbar-components n2">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Men's</a></li>
          <li><a href="">Women's</a></li>
          <li><a href="">Kid's</a></li>
          <li><a href="">About Us</a></li>
        </ul>
      </div>
      <div className="Navbar-components n3">
        <div className="search icon"><SearchIcon/></div>
        <div className="user icon"><PersonIcon/></div>
        <div className="addcard icon"><ShoppingCartIcon/> </div>
      </div>
      <div className="Navbar-components n4"><MenuIcon/></div>
    </div>
  );
}

export default Nav;
