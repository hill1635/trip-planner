import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = props.stops;

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", (event) => {
      props.setStops(stops);
      stops.push(document.querySelector(".addInput").value);
    });
  });

  return (
    <button className="addBtn button is-rounded is-success m-3">
      <i class="fas fa-plus plus mr-1"></i>
      Add Stop
    </button>
  );
}

export default AddBtn;
