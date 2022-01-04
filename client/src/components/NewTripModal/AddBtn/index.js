import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = [...props.stops];
  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      var value = document.querySelector(".addStop").value;
      stops.push(value);
      props.setStops(stops);
    });
  });

  return (
      <button className="addBtn button is-rounded is-success">
        <i className="fas fa-plus plus m-0 p-0"></i>
        Add Destination
      </button>
  );
}

export default AddBtn;
