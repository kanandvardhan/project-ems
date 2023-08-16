import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Heroes = () => {
  return (
    <div className="heroes flex flex-wrap justify-center container">
      <div
        data-te-ripple-init
        data-te-ripple-color="aqua"
        className="w-full sm:w-3/4 lg:w-1/2 lg:mb-0 mb-12 px-4"
      >
        <div className=" p-6 shadow-lg rounded ">
          <img
            alt="..."
            src={require("../assets/img/team-3-800x800.jpg")}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-3xl font-bold">Vinthi Kachawa</h5>
            <p className="mt-1 text-xl text-gray-500 uppercase font-semibold">
              Associate
            </p>
            <div className="mt-6">
              <a
                className="bg-deep-cerulean-700 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                type="button"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="pt-2 w-8 h-8"
                ></FontAwesomeIcon>
              </a>
              <a
                className="bg-mountain-meadow-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                type="button"
                href="https://wa.me/+918639929546"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="pl-0 pt-1 w-8 h-9 "
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        data-te-ripple-init
        data-te-ripple-color="purple"
        className="w-full sm:w-3/4 lg:w-1/2 lg:mb-0 mb-12 px-4 "
      >
        <div className=" p-6 shadow-lg rounded">
          <img
            alt="..."
            src={require("../assets/img/team-4-470x470.png")}
            className="shadow-lg rounded-full max-w-full mx-auto"
            style={{ maxWidth: "120px" }}
          />
          <div className="pt-6 text-center">
            <h5 className="text-3xl font-bold">Madhumita V</h5>
            <p className="mt-1 text-xl text-gray-500 uppercase font-semibold">
              Proprietor
            </p>

            <div className="mt-6">
              <a
                className="bg-deep-cerulean-700 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                type="button"
                href="https://www.linkedin.com/in/madhumita-v-5a42971b3/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="pt-2 w-8 h-8"
                ></FontAwesomeIcon>
              </a>
              <a
                className="bg-mountain-meadow-500 text-white w-12 h-12 rounded-full outline-none focus:outline-none mr-2 mb-1"
                type="button"
                href="https://wa.me/+919110301639"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="pl-0 pt-1 w-8 h-9 "
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
