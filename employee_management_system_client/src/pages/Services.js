import React from "react";
import "./Services.css";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";

import SidePackages from "../components/SidePackages";

const Services = () => {
  return (
    <motion.div
      className="content-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="services ">
        <div className="services_in container items-start">
          <div className="service-list w-3/4 px-5">
            <h1 className="font-semibold text-4xl sm:text-5xl uppercase">
              Corporate Secretarial Services
            </h1>
            <div className="services-details py-10 lg:pr-20">
              <div className="services-accordion">
                <Accordion />
              </div>
            </div>
          </div>
          <SidePackages />
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
