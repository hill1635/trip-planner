import React from "react";
import SignUpModal from "../SignUpModal";

function SignUpBtn(props) {
  return (
    <div>
      <button to="/signup" className={props.display.signupBtn}>
        <strong>Sign up</strong>
      </button>
      <SignUpModal/>
    </div>
  );
}

export default SignUpBtn;
