import React, { useEffect } from "react";
import {
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaHtml5,
  FaSass,
  FaReact,
  FaBootstrap,
  FaNode,
  FaJava,
} from "react-icons/fa";
import { PiFileSqlBold } from "react-icons/pi";
import {
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandRedux,
} from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import ScrollReveal from "scrollreveal";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JS", icon: <FaJsSquare /> },
  { name: "REACT", icon: <FaReact /> },
  { name: "REDUX", icon: <TbBrandRedux /> },
  { name: "NODE.JS", icon: <FaNode /> },
  { name: "Mongodb", icon: <TbBrandMongodb /> },
  { name: "CHAKRA UI", icon: <SiChakraui /> },
  { name: "TAILWIND", icon: <TbBrandTailwind /> },
  { name: "BOOTSTRAP", icon: <FaBootstrap /> },
  { name: "SASS", icon: <FaSass /> },
  { name: "FIGMA", icon: <FaFigma /> },
  { name: "TYPESCRIPT", icon: <TbBrandTypescript /> },
  { name: "SQL", icon: <PiFileSqlBold /> },
  { name: "JAVA", icon: <FaJava /> },
];

function Skills() {
  useEffect(() => {
    // ScrollReveal animation for the skills cards
    ScrollReveal().reveal(".skills-card", {
      origin: "bottom",
      distance: "30px",
      duration: 600,
      delay: 100,
      interval: 100, // Delay between each element reveal
      reset: true, // Replay animation on scroll up
    });
  }, []);

  return (
    <div id="skills">
      <h1>Skills and Tools</h1>
      <div className="skills_deta">
        {skills.map((item, index) => (
          <div key={index} className="skills-card">
            <div className="skills-card-inner">
              <div className="skills-card-front">
                <div className="skills-card-img">{item.icon}</div>
              </div>
              <div className="skills-card-back">
                <p className="skills-card-name">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
