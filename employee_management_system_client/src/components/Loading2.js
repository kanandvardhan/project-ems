import React from "react";
import "../pages/Home.css";
import "./Loading2.css"; // Make sure to import the CSS file

const Loading2 = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="absolute flex gap-1">
        <span className="text-white tracking-wide font-medium">Loading</span>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading2;
