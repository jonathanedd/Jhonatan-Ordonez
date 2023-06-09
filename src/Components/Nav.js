import React, { useEffect, useState } from "react";
import "../Styles/nav.css";

//React icnos
import { HiOutlineMenuAlt2 } from "react-icons/hi";

//React Scroll
import { Link } from "react-scroll";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".menu-icon") === null) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="main-nav">
      <div className={`nav-links ${showMenu && "active"}`}>
        <Link
          className="link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span className="number">01. </span>Home
        </Link>
        <Link
          className="link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span className="number">02. </span>About
        </Link>

        {/* These ones below are pending to adjust 
        the react-scroll animation */}

        <Link
          className="link"
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span className="number">03. </span>Work
        </Link>

        <a className="link" href="/experience">
          <span className="number">04. </span>Experience
        </a>

        <a className="link" href="/contact">
          <span className="number">05. </span>Contact
        </a>
      </div>

      <div className={`menu-icon ${showMenu && "active"}`} onClick={handleMenu}>
        <HiOutlineMenuAlt2 className="icon" />
      </div>
      <hr />
    </div>
  );
};

export default Nav;
