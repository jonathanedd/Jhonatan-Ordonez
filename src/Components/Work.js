import React from "react";
import "../Styles/work.css";
import mainMarvel from "../Images/marvel-main.png";

const Work = () => {
  const marvelApi = () => {
    window.open("https://marvel-appi.netlify.app/#/");
  };
  return (
    <div className="main-work" id="work">
      <div className="left-box">
        <h3>03. Check out some of my wok</h3>

        <img onClick={marvelApi} src={mainMarvel} alt="" />
      </div>

      <div className="right-box">
        <h5>Recent Project</h5>
        <h3>Marvel API</h3>

        <span className="span-box">
          A minimal Marvel interface building from the Marvel API using React.
          <br />
          In this page I am using Axios to get some API data, useEffect and
          Router dom. <br /> This site was freely deployed in netlify
        </span>

        <li>Axios - useEffect - Router Dom</li>
      </div>
    </div>
  );
};

export default Work;
