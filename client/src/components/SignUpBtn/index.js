import React from "react";
import SignUpModal from "../SignUpModal";

function SignUpBtn() {
  return (
    <div>
      <button to="/signup" className="button is-primary signup">
        <strong>Sign up</strong>
      </button>
      <SignUpModal/>
    </div>
  );
}

export default SignUpBtn;
