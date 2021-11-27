import React, { useState } from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="hero">
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
        <div className="explore">
          <span>Explore</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
