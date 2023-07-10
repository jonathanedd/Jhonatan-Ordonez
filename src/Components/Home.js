import React, { useState } from "react";
import "../Styles/home.css";

const textEng = [
  "I am passionate about web front-end programming, specializing in creating functional user interfaces.",
];

const textEsp = [
  "Soy un apasionado por el desarollo web front-end y me especializo en la creación de interfaces de usuario funcionales.",
];

const Home = () => {
  const [language, setLanguage] = useState(true);

  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <div className="home-main" id="home">
      <div className="home-text">
        {language ? (
          <h5 className="caida">Hi, my name is</h5>
        ) : (
          <h5 className="caida">Hola, me llamo</h5>
        )}

        <h1 className="caida">Jhonatan Ordonez</h1>
        {language ? (
          <h2 className="caida">I build things for the web.</h2>
        ) : (
          <h2 className="caida">Hago desarrollo Web</h2>
        )}

        {/* <span className="caida">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, nam?
          Eaque dicta voluptatum vero nemo dolor, accusamus maxime dignissimos
          nihil eius necessitatibus a, autem ipsam nesciunt nisi repellendus
          consequuntur itaque.
        </span> */}
        <span className="caida">{language ? textEng : textEsp} </span>

        <a onClick={handleLanguage} className="caida translate" href="/">
          {language ? "Español" : "English"}
        </a>

        <a className="caida message-me" href="/Home">
          Message me
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Home;
