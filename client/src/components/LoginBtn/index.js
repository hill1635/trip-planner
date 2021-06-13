import React, { useEffect, useState } from "react";
import LoginBox from "../LoginBox";

function LoginBtn() {
  const [state, setState] = useState("modal loginModal");
  useEffect(() => {
    var login = document.querySelector(".login");
    login.addEventListener("click", () => {
      setState("modal loginModal is-active");
    });
  });

  return (
    <div>
      <button className="button is-light login">Log in</button>
      <LoginBox state={state}/>
    </div>
  );
}

export default LoginBtn;
