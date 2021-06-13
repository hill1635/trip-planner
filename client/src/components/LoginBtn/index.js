import React, { useEffect, useState } from "react";
import LoginBox from "../LoginBox";

function LoginBtn() {
  return (
    <div>
      <button className="button is-light login">Log in</button>
      <LoginBox/>
    </div>
  );
}

export default LoginBtn;
