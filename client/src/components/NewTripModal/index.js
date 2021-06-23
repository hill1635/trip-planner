import React, { useState, useEffect } from "react";
import "./style.scss";

function NewTripModal() {
  const [state, setState] = useState("modal newTripModal");

  useEffect(() => {
    var startBtn = document.querySelector(".startBtn");
    var addBtn = document.querySelector(".addBtn");

    startBtn.addEventListener("click", () => {
      setState("modal newTripModal is-active");
    });

    addBtn.addEventListener("click", () => {
      console.log(document.querySelector(".addStop").value);
    });
  });

  function close() {
    setState("modal newTripModal");
  }

  return (
    <div className={state}>
      <div className="modal-background"></div>
      <div className="modal-card newTripBox">
        <div className="modal-header">
          <h1 className="title">New Journey</h1>
        </div>
        <div className="modal-content">
          <p>Start Date:</p>
          <input type="text" className="startDate"></input>
          <p>End Date:</p>
          <input type="text" className="endDate"></input>
          <p>Starting Location:</p>
          <input type="text" className="startLocation"></input>
          <p>Ending Location:</p>
          <input type="text" className="endLocation"></input>
          <p>Loop</p>
          <input type="checkbox" className="loop"></input>
          <p>Add Stop:</p>
          <input type="text" className="addStop"></input>
          <button className="addBtn">Add</button>
          <button className="submitBtn">Save</button>
          <button className="cancelBtn" aria-label="close" onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTripModal;
