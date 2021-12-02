import React from "react";
import Navbar from "../navbar/Navbar";
import "./Destination.css";
import Moon from "../../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <header>
      <Navbar />
      <div className="dest_hero">
        <div className="content">
          <div className="m_heading">
            <span>01</span> pick your destination
          </div>
          <div className="sat">
            <div className="img_box">
              <img src={Moon} alt="" />
            </div>
            <div className="sat_info">
              <div className="sat_nav">
                <ul className="sat_items">
                  <li className="sat_item">Moon</li>
                  <li className="sat_item">Mars</li>
                  <li className="sat_item">Europa</li>
                  <li className="sat_item">Titan</li>
                </ul>
              </div>
              <h1 className="sat_name">Moon</h1>
              <p className="sat_desc">
                See our planet as you've never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you're there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr />
              <div className="travel">
                <div className="distance">
                  <h3 className="travel_title">Avg. distance</h3>
                  <p className="travel_info">384,400 Km</p>
                </div>
                <div className="time">
                  <h3 className="travel_title">Est. Travel time</h3>
                  <p className="travel_info">3 days</p>
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
