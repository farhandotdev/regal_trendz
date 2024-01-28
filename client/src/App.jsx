import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllRoutes from "./AllRoutes";
import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";

function App() {
  const [navigation, setNavigation] = useState("");

  const handleNavigation = (newNavigation) => {
    setNavigation(newNavigation);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav handleNavigation={handleNavigation} />
        <AllRoutes navigation={navigation} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;