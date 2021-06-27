import React from "react";
import "./style.scss";

function CancelBtn(props) {

  return (
    <button className="cancelBtn button is-danger is-outlined is-rounded" aria-label="close" onClick={props.close}>
      <i class="fas fa-times mr-1"></i>
      Cancel
    </button>
  );
}

export default CancelBtn;
