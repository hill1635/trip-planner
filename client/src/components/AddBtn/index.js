import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  console.log("setStops: ", props.setStops);
  var stops = [];

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      stops.push(document.querySelector(".addInput").value);
      props.setStops(stops);
    });
  });

  return <button className="addBtn">Add</button>;
}

export default AddBtn;
