import React from "react";
import "./HomePage.css";
import GridSlide from "../../Components/GridSlide/GridSlide";
import Slider from "../../Components/Slider/Slider";
import FilterSection from "../../Components/FilterSection/FilterSection";
import ph from "../../assets/cloth.jpg";
import Cloth2 from "../../assets/cloth2.jpg";

const Home = ({ navigation }) => {
  return (
    <div className="app-container">
      <div className="Homecontainer">
        {navigation === "men" ||
        navigation === "women" ||
        navigation === "kids" ? (
          <>
            <FilterSection />
          </>
        ) : (
          <>
            <Slider img_={Cloth2} />
            <GridSlide />
            <Slider img_={ph} />
            <FilterSection />
            <Slider img_={Cloth2} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

