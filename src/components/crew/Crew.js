import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./crewStyles.css";
import { importAll, data } from "../Helpers/ImportImges";
/*Require data and images */
const secRequire = require.context(
  "../../assets/crew",
  false,
  /\.(png|jpe?g|svg)$/
);

const Crew = () => {
  const myImages = importAll(secRequire);
  const { crew } = data;
  const [member, setMember] = useState(0);

  return (
    <header>
      <Navbar />
      <div className="crew_hero">
        <div className="m_heading">
          <span>02</span> Meet your crew
        </div>
        <div className="content">
          <div className="img_box">
            <img
              src={myImages[`${crew[member].images.png}.png`].default}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Crew;
