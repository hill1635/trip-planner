import React from "react";

function LoginBox(props) {

    return (
        <div className={props.state}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <h1 className="title">Login</h1>
          <input type="text"></input>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    );
}

export default LoginBox;