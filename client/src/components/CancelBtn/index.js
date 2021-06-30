import React from "react";
import "./style.scss";

function CancelBtn(props) {

  return (
    <button className="cancelBtn button is-danger is-outlined is-rounded ml-3" aria-label="close" onClick={props.close}>
      <i className="fas fa-times mr-1"></i>
      Cancel
    </button>
  );
}

export default CancelBtn;
