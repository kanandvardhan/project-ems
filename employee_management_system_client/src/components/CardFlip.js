import React, { useState } from "react";
import "./CardFlip.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import landscape from "../assets/images/landscape.jpg";
import flowers from "../assets/images/flowers.jpg";

export default function CardFlip() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);

  return (
    <div className="heroes flex flex-wrap items-center container">
      <div
        className={`card ${
          flip1 ? "flip" : ""
        } w-full sm:w-3/4 lg:w-2/5 lg:mb-0 mb-12 px-4`}
        style={{ height: "255px" }}
        onClick={() => setFlip1(!flip1)}
      >
        <div
          data-te-ripple-init
          data-te-ripple-color="aqua"
          className="card-front w-full "
          //   sm:w-3/4 lg:w-1/2 lg:mb-0 mb-12 px-4
        >
          <div className=" p-6 shadow rounded ">
            <img
              alt="..."
              src={require("../assets/img/team-3-800x800.jpg")}
              className="shadow-lg rounded-full max-w-full mx-auto"
              loading="eager"
              style={{ maxWidth: "120px", maxHeight: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-3xl font-bold">Vinthi Kachawa</h5>
              <p className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                Associate
              </p>
              <div className="mt-6">
                <button
                  className="bg-deep-cerulean-700 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                  onClick={() => {
                    openInNewTab("https://www.linkedin.com/");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="pt-2 w-8 h-8"
                  ></FontAwesomeIcon>
                </button>
                <button
                  className="bg-mountain-meadow-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                  onClick={() => {
                    openInNewTab("https://wa.me/+918639929546");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="pl-0 pt-1 w-8 h-9 "
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div
            className="card-back-image bg-cover"
            style={{ backgroundImage: `url(${landscape})` }}
          ></div>
          <div className="card-back-text">
            <h3 className="text-3xl mb-3">Hi!</h3>
            <p className="text-3xl">
              I'm Vinthi, an Assosciate working at VM &amp; Assoc.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`card ${
          flip2 ? "flip" : ""
        } w-full sm:w-3/4 lg:w-2/5 lg:mb-0 mb-12 px-4`}
        style={{ height: "255px" }}
        onClick={() => setFlip2(!flip2)}
      >
        <div
          data-te-ripple-init
          data-te-ripple-color="purple"
          className="card-front w-full "
          //   sm:w-3/4 lg:w-1/2 lg:mb-0 mb-12 px-4
        >
          <div className=" p-6 shadow rounded ">
            <img
              alt="..."
              src={require("../assets/img/madhumita1.png")}
              className="shadow-lg rounded-full max-w-full mx-auto"
              loading="eager"
              style={{ maxWidth: "120px", maxHeight: "120px" }}
            />
            <div className="pt-6 text-center">
              <h5 className="text-3xl font-bold">Madhumita V</h5>
              <p className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                Proprietor
              </p>
              <div className="mt-6">
                <button
                  className="bg-deep-cerulean-700 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                  onClick={() => {
                    openInNewTab(
                      "https://www.linkedin.com/in/madhumita-v-5a42971b3/"
                    );
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="pt-2 w-8 h-8"
                  ></FontAwesomeIcon>
                </button>
                <button
                  className="bg-mountain-meadow-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                  onClick={() => {
                    openInNewTab("https://wa.me/+919110301639");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="pl-0 pt-1 w-8 h-9 "
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-back">
          <div
            className="card-back-image bg-cover"
            style={{ backgroundImage: `url(${flowers})` }}
          ></div>
          <div className="card-back-text">
            <h3 className="text-3xl mb-3">Hi!</h3>
            <p className="text-3xl">
              I'm Madhumita, Proprietor at VM &amp; Assoc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
