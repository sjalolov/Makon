import "./App.css";
import Profile from "./PortfolioCointainer/Home/Profile";
import React from "react";
import Footer from "./PortfolioCointainer/Footer/Footer";
import Aboutme from "./PortfolioCointainer/AboutMe/Aboutme";
import Contactme from "./PortfolioCointainer/ContactMe/Contactme";
import Service from "./PortfolioCointainer/Service/Service";
import Image from "./PortfolioCointainer/Images/Image";

function App() {
  return (
    <div className="App">
      <Profile />
      <Image />
      <Service />
      <Aboutme />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
