import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { ReactComponent as Brand } from "../assets/logo.svg";
// import logo from "../assets/logo.png";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";
import CollapsibleNav from "./CollapsibleNav";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className="navbar text-white active:text-rose-400">
        <div className="containernav px-6 z-50 sm:z-0">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="logo items-end cursor-pointer select-none"
          >
            {/* <Brand
              style={{ cursor: "pointer" }}
            /> */}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 md:py-5 rounded">
              <span className=" text-5xl mr-3 text-white">VM &amp;</span>
              <span className="text-3xl text-white">Assoc.</span>
            </span>
            {/* <img
              src={logo}
              alt="VMA ASSOCIATES"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            /> */}
          </div>
          <div className="menu-icon text-white">
            <Hamburger
              size={28}
              toggled={showNavbar}
              toggle={setShowNavbar}
              style={{ marginRight: "15px" }}
              duration={0.8}
            />
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul className="nav_items">
              <div className="mobile-nav">
                <CollapsibleNav handleShowNavbar={handleShowNavbar} />
              </div>
              <li onClick={handleShowNavbar}>
                <NavLink to="/">
                  <span className="dropspace">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <span className="dropspace" onClick={handleShowNavbar}>
                    Services
                  </span>
                </NavLink>
                <ul className="nav__listitemdrop">
                  <li
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    Company Law
                  </li>
                  <li
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    Legal Services
                  </li>
                  <li
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    Client Representation
                  </li>
                  <li
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    More...
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/about">
                  <span className="dropspace" onClick={handleShowNavbar}>
                    About Us
                  </span>
                </NavLink>
                <ul className="nav__listitemdrop">
                  <li
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    Our Team
                  </li>
                  <li
                    onClick={() => {
                      navigate("/pricing");
                    }}
                  >
                    Pricing
                  </li>
                  <li
                    onClick={() => {
                      navigate("/testimonials");
                    }}
                  >
                    Testimonials
                  </li>
                  <li
                    onClick={() => {
                      navigate("/important-links");
                    }}
                  >
                    Important Links
                  </li>
                  <li
                    onClick={() => {
                      navigate("/policies");
                    }}
                  >
                    Policies
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleShowNavbar}>
                  <span className="dropspace">Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
