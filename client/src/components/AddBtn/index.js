import React, { useEffect } from "react";
import AddedStops from "../AddedStops";
import "./style.scss";

function AddBtn(props) {
  var stops = props.stops;

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      // stops = [...stops, document.querySelector(".addInput").value];
      stops.push(document.querySelector(".addInput").value);
      props.setStops(stops);
    });
  });

  return (
    <div className="column">
      <AddedStops stops={stops} />
      <button className="addBtn button is-rounded is-success m-3">
        <i className="fas fa-plus plus mr-1"></i>
        Add Stop
      </button>
    </div>
  );
}

export default AddBtn;
