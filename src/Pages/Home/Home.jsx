import React from "react";
import Nav from "../../Components/Navbar/Nav";
import GridSlide from "../../Components/GridSlide/GridSlide";
import Button from "@mui/material/Button";
import Slider from "../../Components/Slider/Slider";
import Login from "../Login/Login";
import "./Home.css";
import FilterSection from "../../Components/FilterSection/FilterSection";
import Footer from "../../Components/Footer/Footer";
import Product from "../../Components/Product-Part/Product"

const Home = () => {
  return (
    <div className="Homecontainer">
      <Nav />
      <div className="Homepage">
        {/* <GridSlide /> */}
        {/* <Slider /> */}
        <Product/>
      </div>
      {/* <div className="homepage2"><FilterSection /></div> */}

      <div className="homepage3">
        {/* <Footer />  */}
      </div>
    </div>
  );
};

export default Home;
