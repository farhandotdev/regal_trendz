import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Filter from "./Components/Filterpart/Filter";
import Card from "./Components/Card-section/Card";
import { ClassNames } from "@emotion/react";

function App() {
  return (
    <div className="main">
    <div className="main-child">
    <Home/>

    
    </div>
     <div className="main-child1">
     <Filter />
      <Card />
     </div>

     
    </div>
  );
}

export default App;
