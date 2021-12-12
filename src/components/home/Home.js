import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <header className="home_bg">
      <Navbar />
      <motion.div
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="content">
          <p className="m_heading">So, you want to travel to</p>
          <h1 className="heading">Space</h1>
          <p className="description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination">
          <div className="explore">
            <span>Explore</span>
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Home;
