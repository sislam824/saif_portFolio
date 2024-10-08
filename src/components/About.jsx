import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import img2 from "../assests/Saly-10.png";

function About() {
  useEffect(() => {
    // Set up ScrollReveal
    ScrollReveal().reveal(".about_card", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      easing: "ease-in-out",
      reset: true, // Animation repeats when element is scrolled out and back into view
    });
  }, []);

  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <div className="about_card">
        <img className="about_img" src={img2} alt="About" />
        <p id="user-detail-intro" className="my-details">
          I am a Full-Stack Web Developer from India. Self-motivated and curious
          with a keen interest in building user-friendly products. Looking
          forward to applying technical skills like CSS, MERN, and JavaScript to
          all the organizations that I offer my services to and help the
          organization grow and develop alongside me.
        </p>
      </div>
    </div>
  );
}

export default About;
