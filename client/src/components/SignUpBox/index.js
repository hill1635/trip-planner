import React, { useState, useEffect } from "react";
import "./style.scss";

function SignUpBox() {
    const [state, setState] = useState("modal loginModal");
  
    useEffect(() => {
      var signup = document.querySelector(".signup");
      signup.addEventListener("click", () => {
        setState("modal signupModal is-active");
      });
    });
    
    function close() {
      setState("modal loginModal");
    }
  
    return (
      <div className={state}>
        <div className="modal-background"></div>
        <div className="modal-card signupBox">
          <div className="modal-header">
            <h1 className="title">Sign up</h1>
          </div>
          <div className="modal-content">
            <p>Email:</p>
            <input type="text"></input>
            <p>Password:</p>
            <input type="text"></input>
            <button className="submit">Sign up</button>
            <button className="cancelBtn" aria-label="close" onClick={close}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUpBox;
  