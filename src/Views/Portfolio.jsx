import React from "react";
import About from "../Components/About";
import Experience from "../Components/Experience";
import Knowledge from "../Components/Knowledge";
import Projects from "../Components/Projects";
import SectionsNav from "../Components/SectionsNav";

//css
import "../css/Portfolio.css";
function Portfolio() {
  return (
    <div className="mainContainer">
      <div className="sectionsContainer">
        <About />
        <Experience />
        <Knowledge />
        <Projects />
      </div>

      <SectionsNav />
    </div>
  );
}

export default Portfolio;
