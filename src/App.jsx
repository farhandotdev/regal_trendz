
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Filter from "./Components/Filterpart/Filter";
import Card from "./Components/Card-section/Card";
import { ClassNames } from "@emotion/react";
import Card1 from "./Components/Card-section/Card1";
import AddToCard from "./Components/AddCardSec/AddToCard";

function App() {
  return (
    <div className="main">
    <div className="main-child">
    <Home/>
    </div>  
    </div>
  );
  }

export default App;
