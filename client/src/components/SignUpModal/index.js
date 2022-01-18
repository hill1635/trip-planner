import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.scss";

function SignUpModal() {
    const [state, setState] = useState("modal loginModal");

    function submitSignup(target) {
      var submittedInfo = target.parentNode.children[0];
      
      API.createUser({
        email: submittedInfo.children[0].children[0].value,
        password: submittedInfo.children[1].children[0].value
      });
    }
  
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
          <div className="modal-header has-text-centered">
            <h1 className="title">Sign up</h1>
          </div>
          <div className="modal-content">
            <div className="centered columns">
              <div className="centered column is-half">
                <input className="email input is-rounded" type="text" placeholder="Email"></input>
              </div>
              <div className="centered column is-half">
                <input className="password input is-rounded"type="password" placeholder="Password"></input>
              </div>
            </div>
            <button className="submit" onClick={e => submitSignup(e.target)}>Sign up</button>
            <button className="cancelBtn" aria-label="close" onClick={close}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUpModal;
  