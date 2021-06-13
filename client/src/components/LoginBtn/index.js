import React, { useEffect, useState } from "react";
import LoginBox from "../LoginBox";

function LoginBtn() {
  const [state, setState] = useState();
  useEffect(() => {
    var login = document.querySelector(".login");
    login.addEventListener("click", () => {
        console.log("is-active");
    //   setState("is-active");
    });
  });

  return (
    <div>
      <button className="button is-light login">Log in</button>
      <LoginBox />
    </div>
  );
}

export default LoginBtn;
