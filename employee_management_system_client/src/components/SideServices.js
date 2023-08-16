import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { side_services } from "../assets/constants";
import { useLocation, useNavigate } from "react-router-dom";
import "./Side.css";

const SidePackages = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <>
      <div
        className={`${
          location === "/policies" ? "side1" : "side"
        } p-8 bg-gray-200 w-full lg:w-auto rounded`}
      >
        <h1 className="mb-5 text-4xl sm:text-5xl font-semibold uppercase">
          Services
        </h1>
        <ul className="ml-5 divide-y divide-neutral-400">
          {side_services.map((item) => (
            <li key={item.id} className="pb-3 pt-8 cursor-pointer">
              <span>
                <FontAwesomeIcon
                  className="mr-5"
                  icon={faCaretRight}
                ></FontAwesomeIcon>
              </span>
              <button
                className="text-2xl text-gray-700 hover:text-white"
                onClick={() => {
                  navigate("/services");
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidePackages;
