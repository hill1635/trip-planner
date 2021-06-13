import React, { useEffect, useState } from "react";
import "./style.css";

function LoginBox(props) {
  const [state, setState] = useState("modal loginModal");

  useEffect(() => {
    var login = document.querySelector(".login");
    login.addEventListener("click", () => {
      setState("modal loginModal is-active");
    });
  });
  
  function close() {
    setState("modal loginModal");
  }

  return (
    <div className={state}>
      <div className="modal-background"></div>
      <div className="modal-card loginBox">
        <div className="modal-header">
          <h1 className="title">Login</h1>
        </div>
        <div className="modal-content">
          <p>Email:</p>
          <input type="text"></input>
          <p>Password:</p>
          <input type="text"></input>
          <button className="cancelBtn" aria-label="close" onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
