import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import GridSlide from '../../Components/GridSlide/GridSlide';
import Button from '@mui/material/Button';
import Slider from '../../Components/Slider/Slider';
import Login from '../Login/Login'
import "./Home.css"
import FilterSection from '../../Components/FilterSection/FilterSection';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="Homecontainer">
      <div className='Homepage'>
        <Nav />
        <GridSlide />
        <Slider />
      </div>
      <div className="homepage2">
        <FilterSection/> 
      </div>
      <div className="homepage3">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
