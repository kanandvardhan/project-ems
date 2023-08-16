import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { contact } from "../assets/constants";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer">
        <div className=" sb__footer section__padding ">
          <div className="containerfooter sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>Main Links</h4>
              <a
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>

              <a
                onClick={() => {
                  navigate("/services");
                }}
              >
                Services
              </a>
              <a
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </a>
              <a
                onClick={() => {
                  navigate("/important-links");
                }}
              >
                Important Links
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Expertise</h4>
              <a
                href="#"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Company Law
              </a>
              <a
                href="#"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Legal Services
              </a>
              <a
                href="#"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Due Diligence
              </a>
              <a
                href="#"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Licences & Registrations
              </a>
              <a
                href="#"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Other Services
              </a>
            </div>

            {/* <div className="sb__footer-links_div">
              <h4>Partners</h4>
              <a href="/partners">Company 1</a>
              <a href="/partners">Company 2</a>
              <a href="/partners">Company 3</a>
              <a href="/partners">Company 4</a>
            </div> */}
            <div className="sb__footer-links_div">
              <h4>Company</h4>
              <a
                onClick={() => {
                  navigate("/about");
                }}
              >
                About Us
              </a>
              <a
                onClick={() => {
                  navigate("/pricing");
                }}
              >
                Pricing
              </a>
              <a
                onClick={() => {
                  navigate("/testimonials");
                }}
              >
                Testimonials
              </a>
              <a
                onClick={() => {
                  navigate("/policies");
                }}
              >
                Policies
              </a>
            </div>

            <div className="sb__footer-links_div">
              <h4>
                <span>Get In Touch</span>
              </h4>
              {contact.map((c) => (
                <ul key={c.id} className="get-in-touch ">
                  <FontAwesomeIcon
                    className="get-in-touch-icons"
                    icon={faLocationArrow}
                  ></FontAwesomeIcon>
                  <li className="get-in-touch-text">
                    <a
                      className="select-text"
                      href="https://goo.gl/maps/SAyXpcq1wTLFsgUX9"
                      target="_blank"
                    >
                      {c.address.title}
                    </a>
                    <br />
                    {/* 1-1-29/35, */}XXXXX
                    <br /> {/*JJ Colony, Kapra */}XXXXX
                    <br />
                    {/* ECIL, Hyderabad */}Hyderabad
                    <br />
                    {/* -500062, INDIA. */}INDIA -500001
                  </li>
                  <FontAwesomeIcon
                    className="get-in-touch-icons"
                    icon={faPhone}
                  ></FontAwesomeIcon>
                  <li className="get-in-touch-text select-text">
                    <span>
                      <a
                        className="select-text"
                        href={`tel:+91${c.telephone[1]}`}
                      >
                        +91 {c.telephone[1]}
                      </a>{" "}
                      /{" "}
                      <a
                        className="select-text"
                        href={`tel:+91${c.telephone[2]}`}
                      >
                        {c.telephone[2]}
                      </a>
                    </span>
                  </li>
                  <FontAwesomeIcon
                    className="get-in-touch-icons"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                  <li className="get-in-touch-text select-text">
                    <span>
                      <a className="select-text" href={`mailto:${c.email}`}>
                        <span>{c.email}</span>
                      </a>
                    </span>
                  </li>
                </ul>
              ))}
            </div>

            <div className="sb__footer-links_div follow-us ">
              <h4>Follow Us</h4>
              <div className="socialmedia">
                <a
                  href="https://www.facebook.com/KVMandAssociates/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    size="2xl"
                    className="hover:text-chambray-600"
                    icon={faFacebook}
                  ></FontAwesomeIcon>
                </a>
                <a href="https://wa.me/+919110301639" target="_blank">
                  <FontAwesomeIcon
                    size="2xl"
                    icon={faWhatsapp}
                    className=" hover:text-mountain-meadow-500"
                  ></FontAwesomeIcon>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <FontAwesomeIcon
                    size="2xl"
                    className="insta"
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FontAwesomeIcon
                    size="2xl"
                    icon={faLinkedin}
                    className="hover:text-deep-cerulean-700"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="sb__footer-below text-center">
            <div className="sb__footer-copyright">
              <p>
                &copy;{new Date().getFullYear()} VM & Assoc. All rights
                reserved.
              </p>
            </div>
            <div className="sb__footer-below-links">
              <a
                onClick={() => {
                  navigate("/policies");
                }}
              >
                <div className="w-60 ">
                  <p>Terms & Policies</p>
                </div>
              </a>
              {/* <a
                onClick={() => {
                  navigate("/policies");
                }}
              >
                <div>
                  <p>Policy</p>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
