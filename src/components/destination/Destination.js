import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Destination.css";
import { importAll, data } from "../Helpers/ImportImges";
/*Require data and images */
const myRequire = require.context(
  "../../assets/destination",
  false,
  /\.(png|jpe?g|svg)$/
);

const Destination = () => {
  const myImages = importAll(myRequire);
  const { destinations } = data;
  const [activeSat, setactiveSat] = useState(0);

  return (
    <header className="dest_bg">
      <Navbar />
      <div className="dest_hero">
        <div className="m_heading">
          <span>01</span> pick your destination
        </div>
        <div className="content">
          <div className="sat">
            <div className="img_box">
              <img
                src={
                  myImages[`${destinations[activeSat].images.png}.png`].default
                }
                alt=""
              />
            </div>
            <div className="sat_info">
              <div className="sat_nav">
                <ul className="sat_items">
                  {destinations.map((el, index) => (
                    <li
                      className="sat_item"
                      key={el.name}
                      onClick={() => {
                        setactiveSat(index);
                      }}
                    >
                      {el.name}
                    </li>
                  ))}
                </ul>
              </div>
              <h1 className="sat_name">{destinations[activeSat].name}</h1>
              <p className="sat_desc">{destinations[activeSat].description}</p>
              <hr />
              <div className="travel">
                <div className="distance">
                  <h3 className="travel_title">Avg. distance</h3>
                  <p className="travel_info">
                    {destinations[activeSat].distance}
                  </p>
                </div>
                <div className="time">
                  <h3 className="travel_title">Est. Travel time</h3>
                  <p className="travel_info">
                    {destinations[activeSat].travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Destination;
