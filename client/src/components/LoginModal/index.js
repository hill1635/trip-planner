import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.scss";

function LoginModal(props) {
  const [state, setState] = useState("modal loginModal");

  function close() {
    setState("modal loginModal");
  }

  function login(target) {
    var loginInfo = target.parentNode.parentNode.children[0];
    API.login({
      email: loginInfo.children[0].children[0].value,
      password: loginInfo.children[1].children[0].value,
    }).then(() => {
      props.setLoggedIn(true);
      close();
    });
  }

  useEffect(() => {
    var login = document.querySelector(".login");
    login.addEventListener("click", () => {
      setState("modal loginModal is-active");
    });
  });

  return (
    <div className={state}>
      <div className="modal-background"></div>
      <div className="modal-card loginBox">
        <div className="modal-header has-text-centered">
          <h1 className="title">Login</h1>
        </div>
        <div className="modal-content p-5">
          <div className="centered columns">
            <div className="centered column is-half">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Email"
              ></input>
            </div>
            <div className="centered column is-half">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div className="column centered is-two-fifths">
            <button
              className="submit button is-rounded is-success"
              onClick={(e) => login(e.target)}
            >
              Login
            </button>
            <button
              className="cancelBtn button is-danger is-outlined is-rounded"
              aria-label="close"
              onClick={close}
            >
              <i className="fas fa-times mr-1"></i>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
