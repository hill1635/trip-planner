import React from "react";
import LoginBtn from "../LoginBtn";
import SignUpBtn from "../SignUpBtn";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span>
          <h1 className="title">Odyssey</h1>
        </span>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <LoginBtn/>
              <SignUpBtn/>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
