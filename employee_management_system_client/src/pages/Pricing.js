import React from "react";
import { motion } from "framer-motion";
import "./Pricing.css";

const Pricing = () => {
  return (
    <motion.div
      className="content-container bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
};

export default Pricing;
