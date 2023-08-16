import React from "react";
import "./Loading.css";
import "../pages/Home.css";

const Loading = () => {
  return (
    // <div className="content-container">
    <div
      className="loader-wrapper content-container"
      // style={{ height: "650px", display: "flex", justifyContent: "center" }}
    >
      <div
        // style={{ borderBlockColor: "black", alignSelf: "center" }}
        className="loader"
      ></div>
    </div>
    // </div>
  );
};

export default Loading;
