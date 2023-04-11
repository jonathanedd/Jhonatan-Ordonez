import React from "react";
import "../Styles/nav.css";

const nav = () => {
  return (
    <div className="main-nav">
      <li>
        <a href="/">1. About</a>
      </li>
      <li>
        <a href="/">2. Experience</a>
      </li>
      <li>
        <a href="/">3. Work</a>
      </li>
      <li>
        <a href="/">4. Contact</a>
      </li>
    </div>
  );
};

export default nav;
