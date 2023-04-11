import React from "react";

//Components
import imageMe from "../Images/about-me.jpg";
import cv from "../Assets/cv.pdf";
import "../Styles/aboutme.css";

//React icons
import { GrLinkedinOption, GrGithub, GrInstagram } from "react-icons/gr";

const AboutMe = () => {
  //Functions
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/jonaedd/");
  };

  const handleGitHub = () => {
    window.open("https://github.com/jonathanedd");
  };

  const handleInsta = () => {
    window.open("https://www.instagram.com/jonaedd/");
  };
  return (
    <div className="about-me-main">
      <div className="about-me-text">
        <h5>Hi, my name is</h5>
        <h3>Jhonatan Ordonez</h3>

        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          unde dolorem, repudiandae reiciendis odio iure non officiis corporis
          beatae earum quidem, ratione ad quod mollitia voluptates delectus
          laboriosam nihil eius!
        </span>

        <a href={cv}>Download CV</a>
        <div className="about-icons">
          <i>
            <GrLinkedinOption onClick={handleLinkedIn} />
          </i>
          <i>
            <GrGithub onClick={handleGitHub} />
          </i>
          <i>
            <GrInstagram onClick={handleInsta} />
          </i>
        </div>
      </div>

      <img src={imageMe} alt="about-me" />
    </div>
  );
};

export default AboutMe;
