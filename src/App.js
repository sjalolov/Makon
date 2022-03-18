import "./App.css";
import Profile from "./PortfolioCointainer/Home/Profile";
import React from 'react'
import Footer from "./PortfolioCointainer/Footer/Footer";
import Aboutme from "./PortfolioCointainer/AboutMe/Aboutme";
import Contactme from "./PortfolioCointainer/ContactMe/Contactme";

function App() {
  return (
    <div className="App">
      <Profile/>
      <Aboutme />
      <Contactme/>
      <Footer/>
    </div>
  );
}

export default App;
