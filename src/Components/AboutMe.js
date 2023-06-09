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
    <div className="about-me-main" id="about">
      <div className="about-me-text">
        <h5 className="caida">About me</h5>
        <h3 className="caida">Web developer</h3>

        <span className="caida">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          unde dolorem, repudiandae reiciendis odio iure non officiis corporis
          beatae earum quidem, ratione ad quod mollitia voluptates delectus
          laboriosam nihil eius!
        </span>

        <a className=" caida download-cv" href={cv}>
          Download CV
        </a>

        <div className="caida about-icons">
          <a href="/">
            <GrLinkedinOption className="icon" onClick={handleLinkedIn} />
          </a>
          <a href="/">
            <GrGithub className="icon" onClick={handleGitHub} />
          </a>
          <a href="/">
            <GrInstagram className="icon" onClick={handleInsta} />
          </a>
        </div>
      </div>
      <img src={imageMe} alt="about-me" />
      <hr />
    </div>
  );
};

export default AboutMe;
