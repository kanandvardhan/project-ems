import React, { useEffect, useState } from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CardFlip from "../components/CardFlip";
import about from "../assets/images/about-bg.jpg";
import Loading from "../components/Loading";

const About = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="content-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="about-bg bg-cover bg-fixed bg-center"
        // style={{
        //   backgroundImage: `url(${about})`,
        //   objectFit: "cover",
        //   height: "100%",
        //   width: "100%",
        // }}
        loading="eager"
        style={{
          backgroundImage: `url(${about})`,
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          loading="eager"
          src={`url(${about})`}
          style={{ display: "none" }}
        ></img>
      </div>
      <section>
        <section className="px-10 pt-5">
          <div className="2xl:mx-auto lg:py-16  md:py-12 md:px-36 py-9 px-5">
            <div className="flex flex-col xl:flex-row justify-between gap-10 items-center">
              <div className="w-full xl:w-5/12 flex flex-col justify-center text-justify">
                <div className="text-gray-600 p-3 text-center flex-inline items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    beatFade
                  ></FontAwesomeIcon>
                </div>
                <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800 pb-4">
                  About Us
                </h1>
                <p className="font-normal text-3XL text-gray-600 py-5">
                  At VMA Associates, we understand the importance of compliance
                  and governance in today's dynamic business environment. Our
                  team of highly skilled and knowledgeable company secretaries
                  is dedicated to helping organizations navigate the complex
                  legal and regulatory landscape with ease. We offer a wide
                  range of services, including company formation, corporate
                  governance, compliance management, and secretarial support.
                  <br />
                  <br />
                  What sets us apart is our unwavering focus on delivering
                  exceptional service to our clients. We take the time to
                  understand their specific requirements and provide them with
                  practical and efficient solutions. Our team combines technical
                  expertise with a deep understanding of industry best
                  practices, ensuring that our clients receive the highest level
                  of professional advice and support.
                  <br />
                  <br />
                  As a client-centric organization, we prioritize building
                  long-term relationships based on trust, integrity, and
                  transparency. We strive to become trusted advisors to our
                  clients, offering strategic insights and guidance to help them
                  achieve their business objectives. Our commitment to
                  excellence is reflected in our attention to detail,
                  responsiveness, and commitment to delivering results.
                </p>
              </div>
              <div className="w-full xl:w-8/12 xl:mt-28 2xl:m-0">
                <img
                  className="w-full h-full "
                  src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                  alt="A group of People"
                  loading="lazy"
                />
              </div>
            </div>

            {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Our Story
              </h1>
              <p className="font-normal text-3XL text-gray-600 ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.In the first place we have
                granted to God, and by this our present charter confirmed for us
                and our heirs forever that the English Church shall be free, and
                shall have her rights entire, and her liberties inviolate; and
                we will that it be thus observed; which is apparent from
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                    alt="Alexa featured Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                    alt="Alexa featured Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Alexa
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                    alt="Olivia featured Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                    alt="Olivia featured Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Olivia
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                    alt="Liam featued Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                    alt="Liam featued Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Liam
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden"
                    src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                    alt="Elijah featured img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                    alt="Elijah featured img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                    Elijah
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </section>
        <section className="px-10">
          <div className="flex flex-wrap flex-row-reverse items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto flex flex-col items-end">
              <div className="text-gray-600 p-3 text-center flex-inline items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <FontAwesomeIcon icon={faStar} beatFade></FontAwesomeIcon>
              </div>
              <h3 className="text-3xl lg:text-4xl text-right mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              {/* <p className="text-lg text-right font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p> */}
              <p className="text-2xl text-right text-justify font-light leading-relaxed mt-4 mb-4 pt-5">
                VMA Associates is led by two highly skilled professionals with
                extensive experience in the field of Company Law and other
                corporate matters. Their team comprises a qualified Company
                Secretary and a Lawyer, who work collaboratively to deliver
                top-notch services to their clients. With their deep
                understanding of the legal and regulatory requirements, the VMA
                Associates team provides valuable insights and solutions that
                help clients stay compliant with the law while achieving their
                business objectives. Their personalized approach to client
                service ensures that clients receive tailored solutions that
                meet their specific needs. Whether you require assistance with
                company secretarial services, compliance, or legal counsel, the
                VMA Associates team is well-equipped to provide you with
                effective solutions.
              </p>

              <button
                onClick={() => {
                  navigate("/testimonials");
                }}
                className="text-4xl blink-soft text-rose-400 font-bold my-8 flex-inline justify-center"
              >
                Check our Testimonials!
              </button>
            </div>
            <div className="w-full md:w-4/12 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                  loading="lazy"
                />
                {/* <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px",
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote> */}
              </div>
            </div>
          </div>
        </section>
        <section
          className="pb-48 pt-20 px-10 container cards mt-32"
          style={{ justifyContent: "center" }}
        >
          <div className="flex-wrap 2xl:mx-auto">
            <div className="flex w-auto justify-center text-center mt-12">
              <div className="w-full lg:w-1/2 lg:w-6/12 px-4">
                <h2 className="text-5xl font-semibold">Here are our heroes</h2>
                <p className="text-xl leading-relaxed m-4 text-gray-600">
                  Dive into the profiles of our exceptional team members, each
                  possessing unique skills and qualities that collectively form
                  an all-star lineup driving our office's excellence.
                </p>
              </div>
            </div>
            <CardFlip />
          </div>
        </section>
      </section>
    </motion.div>
  );
};

export default About;
