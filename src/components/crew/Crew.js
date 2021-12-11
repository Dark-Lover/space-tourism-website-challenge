import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./crewStyles.css";
import { motion } from "framer-motion";
import { importAll, data } from "../Helpers/ImportImges";
/*Require data and images */
const secRequire = require.context(
  "../../assets/crew",
  false,
  /\.(png|jpe?g|svg)$/
);
// animation
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

const Crew = () => {
  const myImages = importAll(secRequire);
  const { crew } = data;
  const [member, setMember] = useState(0);
  return (
    <header className="crew_bg">
      <Navbar />
      <motion.div
        className="crew_hero flex column"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="m_heading">
          <span>02</span> Meet your crew
        </div>
        <div className="content flex column">
          <div className="img_box">
            <img
              src={myImages[`${crew[member].images.png}.png`].default}
              alt=""
            />
          </div>
          <div className="crew_infos flex column">
            <div className="slide_bullets flex row">
              {crew.map((el, index) => (
                <div
                  className={`bullet ${index === member ? "active" : ""}`}
                  key={el.name}
                  onClick={() => setMember(index)}
                ></div>
              ))}
            </div>
            <div className="details flex column">
              <div className="crew_job role">{crew[member].role}</div>
              <div className="crew_name heading">{crew[member].name}</div>
              <div className="crew_desc lead">{crew[member].bio}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Crew;
