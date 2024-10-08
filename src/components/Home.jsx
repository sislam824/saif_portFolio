import React, { useEffect } from "react";
import myimg1 from "../assests/Saif.me.JPG";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";

function Home() {
  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1fLOjgALXjVLNYP0hjIo_dKOs3FHiIGal/view",
      "_blank"
    );
  };

  useEffect(() => {
    // ScrollReveal animation for different elements
    ScrollReveal().reveal(".my-info", {
      origin: "left",
      distance: "100px",
      duration: 1500,
      reset: true, // Replays the animation on scroll up
    });

    ScrollReveal().reveal(".home-img", {
      origin: "right",
      distance: "100px",
      duration: 1500,
      reset: true,
    });

    const starCount = 5; // Number of stars
    const homeElement = document.getElementById("home");

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      homeElement.appendChild(star);

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}vw`;
      star.style.top = `${y}vh`;

      const moveStar = () => {
        const newX = Math.random() * 100;
        const newY = Math.random() * 100;
        star.style.left = `${newX}vw`;
        star.style.top = `${newY}vh`;
        star.style.opacity = `${Math.random()}`;
        star.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
      };

      setInterval(moveStar, 2000);
    }
  }, []);

  return (
    <div id="home">
      <div className="my-info">
        <h2>Hey there! </h2>
        <h1 id="user-detail-name">I am Saiful Islam</h1>
        <Link
          className="nav-link resume"
          to="https://drive.google.com/uc?export=download&id=1fLOjgALXjVLNYP0hjIo_dKOs3FHiIGal"
        >
          <button id="resume-button-2" onClick={resumedown2}>
            Resume
          </button>
        </Link>
      </div>
      <div>
        <img className="home-img" src={myimg1} alt="Saiful Islam" />
      </div>
    </div>
  );
}

export default Home;
