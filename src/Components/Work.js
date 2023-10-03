import React from "react";
import "../Styles/work.css";
import mainMarvel from "../Images/marvel-main.png";

const Work = () => {
  const marvelApi = () => {
    window.open("https://marvel-appi.netlify.app/#/");
  };
  return (
    <div className="main-work" id="work">
      <div className="marvel-api">
        <div className="left-box">
          <h3 className="number caida"> 03.</h3>
          <h3 className="caida check-work">Check out some of my work</h3>
          <img onClick={marvelApi} src={mainMarvel} alt="" />
        </div>

        <div className="right-box">
          <h5 className="caida">Recent Project</h5>
          <h3 className="caida">Marvel</h3>

          <span className="span-box caida">
            I've developed a sleek Marvel interface using React, built upon the
            Marvel API. The implementation involved Axios for fetching API data,
            utilizing useEffect, and integrating React Router DOM.
          </span>

          <div className="marvel-list">
            <li className="caida">Axios</li>
            <li className="caida"> useEffect</li>
            <li className="caida"> Router Dom</li>
          </div>
        </div>
      </div>

      <div className="another-api"></div>
      <hr />
    </div>
  );
};

export default Work;
