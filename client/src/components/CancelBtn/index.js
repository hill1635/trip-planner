import React from "react";
import "./style.scss";

function CancelBtn(props) {

  return (
    <button className="cancelBtn" aria-label="close" onClick={props.close}>
      Cancel
    </button>
  );
}

export default CancelBtn;
