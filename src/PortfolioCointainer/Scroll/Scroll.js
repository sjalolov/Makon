import React, { useState } from "react";
import "./ScrollStyles.css";
import { FaArrowCircleUp } from "react-icons/fa";
const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  /* I used form instead of button because when I use button there is a random button that I was not able to get rid of it*/
  return (
    <form href="none" className="btn" color="black">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </form>
  );
};

export default Scroll;
