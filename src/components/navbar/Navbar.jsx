import React from "react";
import "./navbar.style.scss";
import Button from "../button/Button";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          {/* todo: change the text to svg component */}
          <h2>Life Supports</h2>
        </div>
        <nav className="nav">
          <ul className="nav__links">
            {/* todo: to map all  */}
            {/* todo: add the arrow icon  and search icon*/}
            <li className="nav__link-item">Services</li>
            <li className="nav__link-item">Locations</li>
            <li className="nav__link-item">Counsellors</li>
            <li className="nav__link-item">Resources</li>
            <li className="nav__link-item">About Us</li>
            <li className="nav__link-item">Careers</li>
            <li className="nav__link-item">Search</li>
          </ul>
        </nav>
        <div className="navbar__buttons">
          <Button
            handleClick={() => console.log("click")}
            classNameProp="navbar__button button-primary"
          >
            Contact Us
          </Button>
          <Button
            handleClick={() => console.log("click")}
            classNameProp="navbar__button button-primary"
          >
            0800 300 1818
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
