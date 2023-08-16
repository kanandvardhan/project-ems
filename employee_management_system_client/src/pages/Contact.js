import React, { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm.js";
import { contact } from "../assets/constants";
import "./Contact.css";
import GMap from "../components/GMap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import contact1 from "../assets/images/contact1.jpg";
import contact3 from "../assets/images/contact3.webp";

const Contact = () => {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section
        className="contact bg-center bg-cover sm:bg-fixed border-none content-container"
        loading="eager"
        style={{
          backgroundImage: `url(${contact1})`,
        }}
      >
        {/* <img
          className="contact bg-center bg-cover sm:bg-fixed"
          loading="eager"
          style={{
            backgroundImage: `url(${contact1})`,
          }}
        ></img> */}
        <div className="container">
          <div className="contact-us">
            {/* <h1 className="text-7xl font-semibold ">CONTACT US</h1> */}
            <div className="contact-enquiry flex justify-between py-25 px-50 bg-white shadow-xl rounded-lg">
              <div className="contact-data bg-green-700 text-white rounded-l-lg max-[768px]:rounded-t-lg">
                {contact.map((c) => (
                  <div key={c.id} className="col-1">
                    <div>
                      <h2 className="text-5xl font-normal">CONTACT US</h2>
                      <h4>
                        Address:
                        <a
                          href="https://goo.gl/maps/SAyXpcq1wTLFsgUX9"
                          target="_blank"
                        >
                          <FontAwesomeIcon
                            className="ml-5 get-in-touch-icons"
                            icon={faLocationArrow}
                          ></FontAwesomeIcon>
                        </a>
                      </h4>
                      <div className="ml-10">
                        <h3 className="text-4xl font-semibold select-text">
                          {c.address.title}
                        </h3>
                        <span>
                          XXXXXXX
                          <br /> XXXXXXX <br /> Hyderabad
                          <br /> INDIA -500001
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4>
                        Telephone:
                        <a href={`tel:+91${c.telephone[1]}`}>
                          <FontAwesomeIcon
                            className="ml-5 get-in-touch-icons"
                            icon={faPhone}
                          ></FontAwesomeIcon>
                        </a>
                      </h4>
                      <div className="ml-10">
                        <span>
                          <a
                            className="select-text"
                            href={`tel:+91${c.telephone[1]}`}
                          >
                            {c.telephone[1]}
                          </a>
                          /
                          <a
                            className="select-text"
                            href={`tel:+91${c.telephone[2]}`}
                          >
                            {c.telephone[2]}
                          </a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4>
                        Email:
                        <a href={`mailto:${c.email}`}>
                          <FontAwesomeIcon
                            className="ml-5 get-in-touch-icons cursor-pointer"
                            icon={faEnvelope}
                          ></FontAwesomeIcon>
                        </a>
                      </h4>
                      <div>
                        <span>
                          <a className="select-text" href={`mailto:${c.email}`}>
                            {c.email}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="enquiry-form">
                <h2 className="text-5xl font-normal ">MAKE AN ENQUIRY</h2>
                {/* <EnquiryFormExpress /> */}
                <EnquiryForm />
              </div>
            </div>
            <div className="contact-map mt-10 p-2 bg-white shadow-xl rounded-lg">
              <GMap />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
