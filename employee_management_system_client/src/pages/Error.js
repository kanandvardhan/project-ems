import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="content-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="">
        <div className="404 py-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-8xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
              404
            </h1>
            <p className="mb-4 text-5xl tracking-tight font-bold text-gray-900 md:text-5xl ">
              Something's missing.
            </p>
            <p className="mb-4 text-4xl font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Error;
