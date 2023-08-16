import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading2 from "./components/Loading2";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Services = React.lazy(() => import("./pages/Services"));
const Error = React.lazy(() => import("./pages/Error"));
const Testimonials = React.lazy(() => import("./pages/Testimonials"));
const ImportantLinks = React.lazy(() => import("./pages/ImportantLinks"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Policies = React.lazy(() => import("./pages/Policies"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/important-links" element={<ImportantLinks />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/*" element={<Error />} />
        <Route path="/loading" element={<Loading2 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
