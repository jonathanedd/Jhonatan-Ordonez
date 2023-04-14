import React from "react";
import "../Styles/home.css";

const Home = () => {
  return (
    <div className="home-main" id="home">
      <div className="home-text">
        <h5 className="caida">Hi, my name is</h5>
        <h1 className="caida">Jhonatan Ordonez</h1>
        <h2 className="caida">I build things for the web.</h2>
        <span className="caida">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, nam?
          Eaque dicta voluptatum vero nemo dolor, accusamus maxime dignissimos
          nihil eius necessitatibus a, autem ipsam nesciunt nisi repellendus
          consequuntur itaque.
        </span>

        <a className="caida message-me" href="/Home">
          Message me
        </a>
      </div>
      <hr />
    </div>
  );
};

export default Home;
