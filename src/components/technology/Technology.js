import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./techStyles.css";
import { importAll, data } from "../Helpers/ImportImges";
/*Require data and images */
const secRequire = require.context(
  "../../assets/technology",
  false,
  /\.(png|jpe?g|svg)$/
);

const Technology = () => {
  const myImages = importAll(secRequire);
  const { technology } = data;
  const [space, setSpace] = useState(2);
  console.log(technology);
  return (
    <header>
      <Navbar />
      <div className="technology_hero flex column">
        <div className="m_heading">
          <span>03</span> Space Launch 101
        </div>
        <div className="content flex column">
          <div className="img_box">
            <img
              src={myImages[`${technology[space].images.landscape}`].default}
              alt=""
            />
          </div>
          <div className="technology_infos flex column">
            <div className="slide_bullets flex row">
              {technology.map((el, index) => (
                <div
                  className={`bullet flex ${index === space ? "active" : ""}`}
                  key={el.name}
                  onClick={() => setSpace(index)}
                >
                  <span className={`index ${index === space ? "active" : ""}`}>
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
            <div className="details flex column">
              <div className="technology_job role small">
                the terminology ...
              </div>
              <div className="technology_name heading">
                {technology[space].name}
              </div>
              <div className="technology_desc lead">
                {technology[space].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Technology;
