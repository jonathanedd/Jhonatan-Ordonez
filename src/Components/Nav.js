import React, { useState } from "react";
import "../Styles/nav.css";

//React icnos
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="main-nav">
      <div className={`nav-links ${showMenu && "active"}`}>
        <a className="link" href="/about">
          1. About
        </a>

        <a className="link" href="/experience">
          2. Experience
        </a>

        <a className="link" href="/work">
          3. Work
        </a>

        <a className="link" href="/contact">
          4. Contact
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
