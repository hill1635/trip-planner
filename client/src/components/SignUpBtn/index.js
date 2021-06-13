import React from "react";
import SignUpBox from "../SignUpBox";

function SignUpBtn() {
  return (
    <div>
      <button to="/signup" className="button is-primary signup">
        <strong>Sign up</strong>
      </button>
      <SignUpBox/>
    </div>
  );
}

export default SignUpBtn;
