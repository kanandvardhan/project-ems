import React from "react";
import "./Services.css";
import SideServices from "../components/SideServices";
import SidePackages from "../components/SidePackages";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Policies.css";

const Services = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="content-container "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="services">
        <div className=" container items-start flex-col md:flex-row">
          <div className="service-lis w-full px-5 ">
            <h1 className="font-semibold text-4xl sm:text-5xl uppercase">
              Policies
            </h1>
            <div
              className="services-details page-bg w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200"
              style={{ height: "200vh" }}
              // py-10 lg:pr-20
            >
              {/* <div class="page-bg"></div> */}

              <div class="animation-wrapper">
                <div class="particle particle-1"></div>
                <div class="particle particle-2"></div>
                <div class="particle particle-3"></div>
                <div class="particle particle-4"></div>
              </div>

              <div class="page-wrapper">
                <h4>Under Construction...</h4>
              </div>
              <div className="services-accordion">
                <button className=""></button>
              </div>
            </div>
          </div>
          <div className="side flex flex-col gap-10 w-full lg:w-auto px-5 mt-10 md:mt-0">
            <SideServices />
            <SidePackages />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
