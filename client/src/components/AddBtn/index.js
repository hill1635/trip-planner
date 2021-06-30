import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = [];

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      stops.push(document.querySelector(".addInput").value);
      props.setStops(stops);
    });
  });

  return (
    <div className="column">
      <button className="addBtn button is-rounded is-success m-3">
        <i className="fas fa-plus plus mr-1"></i>
        Add Stop
      </button>
    </div>
  );
}

export default AddBtn;
