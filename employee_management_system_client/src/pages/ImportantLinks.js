import React, { useEffect, useState } from "react";
import "./Services.css";
import SideServices from "../components/SideServices";
import { imp_links } from "../assets/constants";
import { motion } from "framer-motion";

const ImportantLinks = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <motion.div
      className="content-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="imp_links">
        <div className="services_in container">
          <div className="links-list w-full lg:w-3/4 ">
            <h1 className="font-semibold text-4xl sm:text-5xl ">
              IMPORTANT LINKS
            </h1>
            <div className="links-details px-5 py-10 lg:pr-20 ">
              <div className="links-accordion">
                <div>
                  <ul>
                    {imp_links.map((item, index) => (
                      <li
                        key={index}
                        className="py-2 px-5 mb-7 border border-gray-300 flex flex-col sm:flex-row items-center gap-5 sm:gap-10 hover:border-black hover:cursor-pointer transform transition duration-250 hover:scale-105"
                        onClick={() => {
                          openInNewTab(`${item.link}`);
                        }}
                      >
                        {/* className="w-1/2" */}
                        <span>
                          <img
                            className="min-w-min"
                            src={require(`../assets/webp/${item.image}.webp`)}
                            loading="eager"
                          ></img>
                        </span>
                        {/* className="w-1/2" */}
                        <span className="text-center">
                          {item.label}
                          <a
                            className="text-sky-600 font-medium hover:text-sky-800"
                            href={item.link}
                            target="_blank"
                          >
                            {item.link_label}
                          </a>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <SideServices />
        </div>
      </section>
    </motion.div>
  );
};

export default ImportantLinks;
