import React, { useState } from "react";
import "../Styles/home.css";

import { FaExchangeAlt } from "react-icons/fa";

const textEng = [
  "I'm a Front-end software developer specializing in creating functional user interfaces.",
  <br />,
  " I love React and its tools such Redux and Hooks. Right now I´m focused on a new school sofware project called S.I.G.A which means ",
  "Information system for academic management.",
];

const textEsp = [
  "Soy desarrollador Front-end y me especializo en crear interfaces de usuario funcionales.",
  <br />,
  "Me encanta React y todas sus herramientas como Redux y los Hooks. Ahora mismo me encuentro trabajando en un proyecto de software para un colegio, ",
  "es un sistema de información para la gestión académica S.I.G.A.",
];

const Home = () => {
  const [language, setLanguage] = useState(true);

  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <div className="home-main" id="home">
      <div className="home-text">
        <h5 className="caida">Hi, my name is</h5>
        <h1 className="caida">Jhonatan Ordonez</h1>
        <h2 className="caida">I build things for the web.</h2>
        {/* <span className="caida">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, nam?
          Eaque dicta voluptatum vero nemo dolor, accusamus maxime dignissimos
          nihil eius necessitatibus a, autem ipsam nesciunt nisi repellendus
          consequuntur itaque.
        </span> */}
        <span className="caida">{language ? textEng : textEsp} </span>
        <FaExchangeAlt
          onClick={handleLanguage}
          className={language ? "white" : "green"}
        />

        <a className="caida message-me" href="/Home">
          Message me
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Home;
