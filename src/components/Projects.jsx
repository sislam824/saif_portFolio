import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import anime from "animejs";
import {
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaSass,
  FaBootstrap,
  FaCss3,
} from "react-icons/fa";
import song1 from "../assests/song1.png";
import song2 from "../assests/song2.png";
import song3 from "../assests/song3.png";
import khan1 from "../assests/khan1.png";
import khan2 from "../assests/khan2.png";
import khan3 from "../assests/khan3.png";
import health1 from "../assests/health1.png";
import health2 from "../assests/health2.png";
import health3 from "../assests/health3.png";
import health4 from "../assests/health4.png";

const projects = [
  {
    title: "Beat Pulse",
    images: [song2, song1, song3],
    description:
      "Beat Pulse is a dynamic music streaming app featuring user and admin sides. Users can discover, stream, and curate playlists, while the admin manages content, user roles, and updates the music library.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JS", icon: <FaJsSquare /> },
      { name: "Jason-server" },
    ],
    git: "https://github.com/alfaj7/SAP-Sultans_056",
    preview: "https://beet-pulse-music.netlify.app/",
  },
  {
    title: "Health Tracker",
    images: [health1, health2, health3, health4],
    description:
      "Health Tracker is a wellness app that helps users set health goals, create diet plans, select exercises, and book doctor appointments, offering a complete solution for fitness, nutrition, and healthcare.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Chakra UI" },
      { name: "Sass", icon: <FaSass /> },
      { name: "Firebase" },
    ],
    git: "https://github.com/sagarrathod7568/Health-and-Wellness-App",
    preview: "https://pixel-pole-vault-040.vercel.app/",
  },
  {
    title: "E-Learning Platform",
    images: [khan1, khan2, khan3],
    description:
      "E-Learning Platform is a Khan Academy-inspired app offering courses and lessons. Users access video tutorials and practice exercises, while admins manage content and track user progress to optimize learning.",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "Sass", icon: <FaSass /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
    git: "https://github.com/deep-maurya/Kaveri-Debugging-005",
    preview: "https://innovatoracademy.netlify.app/",
  },
];

function ProjectSlider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: "free-snap",
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <div className="slider-container">
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <div className="keen-slider__slide" key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator-button ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => instanceRef.current?.moveToIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  useEffect(() => {
    // Anime.js entrance animation for project cards
    anime({
      targets: ".project-card",
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      easing: "easeOutExpo",
      duration: 800,
    });
  }, []);

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="all_projects">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <ProjectSlider images={project.images} />
            <div className="pro-Info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <h2>Tech Stack</h2>
              <div className="project-tech-stack">
                {project.skills.map((skill, index) => (
                  <div className="skills-card" key={index}>
                    {skill.icon}
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
              <div className="pro-anchortag">
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <button className="gitbtn">Github Code</button>
                </a>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="gitbtn">Preview</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
