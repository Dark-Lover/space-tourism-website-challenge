import React from "react";
import { useLocation } from "react-router";
import Navbar from "../../components/navbar/Navbar";

const Section = () => {
  const section = useLocation();
  const path = section.pathname.replace("/", "");
  console.log(path);
  return (
    <header>
      <Navbar />
    </header>
  );
};

export default Section;
