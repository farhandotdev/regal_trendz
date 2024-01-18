import React from "react";
import "./HomePage.css";
import Nav from "../../Components/Navbar/Nav";
import GridSlide from "../../Components/GridSlide/GridSlide";
import Slider from "../../Components/Slider/Slider";
import FilterSection from "../../Components/FilterSection/FilterSection";
import Footer from "../../Components/Footer/Footer";
import ph from "../../assets/cloth.jpg";
import Cloth2 from "../../assets/cloth2.jpg";
import ProductPage from "../../Components/Product/ProductPage";


const Home = () => {
  return (
    <div className="app-container">
      <Nav />
      <div className="Homecontainer">
        <Slider img_={Cloth2} />
        <GridSlide />
        <Slider img_={ph} />
        <FilterSection />
        <Slider img_={Cloth2} />
        <ProductPage/>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
