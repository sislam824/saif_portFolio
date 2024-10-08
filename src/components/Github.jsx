import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ScrollReveal from "scrollreveal";

export default function Github() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "30px",
      duration: 600,
      delay: 100,
      easing: "ease-out",
      reset: true,
    });

    sr.reveal(".gitcont", {
      origin: "bottom",
    });

    // Reveal images with a delay
    sr.reveal(".img_div img", {
      origin: "bottom",
      interval: 200, // Delay between each image reveal
    });
  }, []);

  return (
    <div className="gitcont">
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Github
      </h1>
      <div className="hh">
        <GitHubCalendar username="sislam824" />
      </div>

      <div className="img_div">
        <img
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=sislam824&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact"
          alt="sislam824"
        />

        <img
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=sislam824&theme=light&hide_border=false&include_all_commits=true&count_private=true"
          alt="sislam824"
        />

        <img
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com?user=sislam824"
          alt="sislam824"
        />
      </div>
    </div>
  );
}
