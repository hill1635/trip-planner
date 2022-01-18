import React from "react";
import LoginModal from "../LoginModal";

function LoginBtn(props) {
  return (
    <div>
      <button className="button is-light login">Log in</button>
      <LoginModal setLoggedIn={props.setLoggedIn}/>
    </div>
  );
}

export default LoginBtn;
