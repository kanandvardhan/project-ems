import React from "react";
import "./CollapsibleNav.css";
import { mobile_links } from "../assets/constants";
import { Link, useLocation } from "react-router-dom";

export default function CollapsibleNav2({ handleShowNavbar }) {
  const location = useLocation().pathname;

  return (
    <div className="flex justify-center items-center w-screen  p-10">
      {/* <!-- Component Start --> */}
      <div className="flex flex-col w-full">
        {mobile_links.map((el, idx) => (
          <button key={idx} className="group border-black focus:outline-none">
            <div className="flex items-center mob-nav justify-between h-20 px-10 font-semibold hover:bg-gray-200 hover:text-neutral-800">
              <Link
                to={el.link}
                className={`${location === el.link && "active"} ${
                  el.submenu ? null : "w-full text-start"
                }`}
                onClick={handleShowNavbar}
              >
                <span className="truncate text-4xl font-normal mob-nav-name hover:text-neutral-800">
                  {el.name}
                </span>
              </Link>

              {el.submenu && (
                <svg
                  className="h-10 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-96">
              {el.sublinks.map((sub, idx) => (
                <Link
                  key={idx}
                  className="flex items-center justify-center h-20 px-4 text-3xl hover:bg-gray-200"
                  to={sub.link}
                  onClick={handleShowNavbar}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </button>
        ))}
      </div>
      {/* <!-- Component End  --> */}
    </div>
  );
}
