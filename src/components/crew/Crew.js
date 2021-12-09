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
    <header className="crew_bg">
      <Navbar />
      <div className="crew_hero flex column">
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
      </div>
    </header>
  );
};

export default Crew;
