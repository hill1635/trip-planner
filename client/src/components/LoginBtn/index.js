import React from "react";
import LoginModal from "../LoginModal";

function LoginBtn() {
  return (
    <div>
      <button className="button is-light login">Log in</button>
      <LoginModal/>
    </div>
  );
}

export default LoginBtn;
