import React from "react";
import LoginModal from "../LoginModal";

function LoginBtn(props) {
  return (
    <div>
      <button className={props.display.loginBtn}>Log in</button>
      <LoginModal setLoggedIn={props.setLoggedIn}/>
    </div>
  );
}

export default LoginBtn;
