import React from "react";
import "./Navbar.css";
import { useState } from "preact/hooks";
import { About } from "../Pages/About";
// import React, { useState } from "react";


export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  

  return (
    <div>
      <div className="navbar">
        <div className="headerInner">
          {/* <div className="styles.logo">
              <img className={styles.aStrokeIcon} alt="" src="/a-stroke.svg" />
            </div> */}

          <div className="hemburger" onClick={toggleMenu}>
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <div className= {`menuOptions ${isMenuOpen ? "open" : ""}`}>
            <a href="#" className="menuContent">
              Home
            </a>
            <a href={About} className="menuContent">
              About
            </a>
            <a href="##" className="menuContent">
              Products
            </a>
            {/* <a href="##" className="menuContent">
              Journey
            </a>
            <a href="##" className="menuContent">
              Projects
            </a> */}
            <a href="##" className="menuContent">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
