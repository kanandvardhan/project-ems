import React, { useState, useEffect } from "react";
import "../components/ScrollToTopBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopBtn = () => {
  // const [showTopBtn, setShowTopBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scroll = document.querySelector(".icon-style");
      scroll.classList.toggle("active", window.scrollY > 400);
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      <FontAwesomeIcon
        className="icon-position icon-style"
        icon={faAngleUp}
        onClick={goToTop}
      ></FontAwesomeIcon>
    </div>
  );
};
export default ScrollToTopBtn;
