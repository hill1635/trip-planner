import React from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = props.stops;

  return (
    <button className="addBtn button is-rounded is-success" onClick={props.add}>
      <i className="fas fa-plus plus m-0 p-0"></i>
      Add Destination
    </button>
  );
}

export default AddBtn;
