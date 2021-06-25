import React, { useEffect } from "react";
import "./style.scss";

function AddBtn() {
  var stops = [];
  var trip = {};

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      stops.push(document.querySelector(".addInput").value);
      trip.stops = stops;
    });
  });

  return <button className="addBtn">Add</button>;
}

export default AddBtn;
