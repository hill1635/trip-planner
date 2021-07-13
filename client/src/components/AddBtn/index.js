import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = [...props.stops];

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      stops.push({
        name: document.querySelector(".addInput").value,
        coordinates: { lat: "", lng: ""}
      });
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
