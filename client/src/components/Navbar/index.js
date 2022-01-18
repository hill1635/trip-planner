import React, { useState } from "react";
import LoginBtn from "../LoginBtn";
import SignUpBtn from "../SignUpBtn";
import LogoutBtn from "../LogoutBtn";
import { Link } from "react-router-dom";

function Navbar() {
  const [ loggedIn, setLoggedIn ] = useState();

  var display = loggedIn ?
  ({
    loginBtn : "button login is-hidden",
    signupBtn: "button signup is-hidden",
    logoutBtn: "button",
  }): ({
    loginBtn : "button login",
    signupBtn: "button signup",
    logoutBtn: "button is-hidden",
  });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span>
          <h1 className="title">Odyssey</h1>
        </span>

        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <LoginBtn display={display} setLoggedIn={setLoggedIn}/>
              <SignUpBtn display={display}/>
              <LogoutBtn display={display} setLoggedIn={setLoggedIn}/>
            </div>
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
