import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import CarouselTop from "../components/CarouselTop";
import EnquiryForm from "../components/EnquiryForm";
import CarouselBottom from "../components/CarouselBottom";
import CollapsibleHome from "../components/CollapsibleHome";
import whyus_img from "../assets/images/why_us.jpg";
import Cardshome from "../components/Cardshome";
import hero from "../assets/images/hero-1.jpg";
import bg_service from "../assets/images/bg-service.jpg";
import { motion } from "framer-motion";
import { home_para } from "../assets/constants";
import SocialSticky from "../components/SocialSticky";
// import { data } from "autoprefixer";

const Home = () => {
  const navigate = useNavigate();
  // const bottomEl = useRef(null);

  // const scrollToBottom = () => {
  //   bottomEl?.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     scrollToBottom();
  //   }, 3000);
  // });

  return (
    <>
      {/* <SocialSticky /> */}
      <motion.div
        className="content-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="carousel-hero">
          <CarouselTop />
        </section>

        <section
          // onClick={scrollToBottom}
          // ref={bottomEl}
          className="mid-hero bg-center bg-cover"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="home container items-center gap-10 flex-col md:flex-row">
            <div className="sm:py-12 info-mid text-white sm:w-5/6 ">
              <h1>
                <a className="underline decoration-pink-500 decoration-4 underline-offset-8 capitalize">
                  V Madhumita And Associates
                </a>
              </h1>
              <p className="mt-7">{home_para[0]}</p>
              <p className="mt-10">{home_para[2]}</p>

              {/* <button
              onClick={() => {
                navigate("/about");
              }}
              className="group mt-12 relative inline-block font-medium text-white focus:outline-none focus:ring active:text-rose-400"
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-white transition-transform group-hover:translate-y-0 active:bg-rose-400 group-hover:translate-x-0"></span>

              <span className="relative block border border-current bg-rose-400 active:bg-white px-8 py-3">
                Learn More
              </span>
            </button> */}
              <button
                onClick={() => {
                  navigate("/about");
                }}
                className="mt-12 bg-transparent hover:bg-rose-500 font-semibold hover:text-white py-4 px-12 border border-white hover:border-transparent "
              >
                Learn More
              </button>
            </div>
            <div className="">
              <div className="form-mid bg-emerald-600 backdrop-blur-sm bg-opacity-50 shadow-2xl">
                <h1 className="text-white">ENQUIRY</h1>
                <p className="text-white">HOW CAN WE ASSIST YOU?</p>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
        <section
          className="why_us bg-center bg-cover sm:bg-fixed text-white"
          style={{ backgroundImage: `url(${bg_service})` }}
        >
          <div className="slide-services " id="app">
            <h1 className="text-5xl font-semibold uppercase ">Our Services</h1>
            <CarouselBottom />
          </div>
        </section>
        <section
          className="why_us bg-center bg-cover sm:bg-fixed disable-select"
          style={{ backgroundImage: `url(${whyus_img})` }}
        >
          <div className="why-us container items-center lg:items-start">
            <div className="py-24 max-w-4xl">
              <h2 className=" ml-5 text-5xl font-semibold">PACKAGES</h2>
              <p className="mb-10 ml-6 mt-2 ">
                READ OUR COMPANY PACKAGES DETAILS
              </p>
              <Cardshome />
            </div>
            <div className="collapsible py-24 w-11/12 md:w-11/12 lg:w-4/6 max-w-4xl ">
              <h2 className="ml-5 text-5xl font-semibold">WHY CHOOSE US</h2>
              <p className="mb-10 ml-7 mt-2 ">EFFICIENT TEAM TO EXECUTE</p>
              <CollapsibleHome />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
