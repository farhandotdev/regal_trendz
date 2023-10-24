import React from 'react';
import Nav from '../../Components/Navbar/Nav';
import GridSlide from '../../Components/GridSlide/GridSlide';
import Button from '@mui/material/Button';
import  Slider  from '../../Components/Slider/Slider';


const Home = () => {
  return (
    <div className='Homepage'>
       <Nav/>
       <GridSlide/>
       <Slider/>
    </div>
  );
}

export default Home;
