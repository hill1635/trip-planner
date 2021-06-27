import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  console.log("setStops: ", props.setStops);
  var stops = [];

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    var addInput = document.querySelector(".addInput");
    addBtn.addEventListener("click", () => {
      // stops.push(document.querySelector(".addInput").value);
      // props.setStops(stops);
      addInput.className = "addInput input is-rounded";
    });
  });

  return (
    <button className="addBtn button is-rounded is-success m-3">
      <i class="fas fa-plus plus"></i>
      Add Stop
    </button>
  );
}

export default AddBtn;
