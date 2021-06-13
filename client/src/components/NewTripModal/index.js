import React, { useState, useEffect } from "react";
import "./style.scss";

function NewTripModal() {
  const [state, setState] = useState("modal newTripModal");

  useEffect(() => {
    var startBtn = document.querySelector(".startBtn");
    startBtn.addEventListener("click", () => {
      setState("modal newTripModal is-active");
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
            <p>Starting Location:</p>
            <input type="text"></input>
            <p>Ending Location:</p>
            <input type="text"></input>
            <p>Loop</p>
            <input type="checkbox"></input>
            <p>Start Date:</p>
            <input type="text"></input>
            <p>End Date:</p>
            <input type="text"></input>
            <p>Add Stop:</p>
            <input type="text"></input>
            <button className="addStop">Add</button>
            <button className="submit">Save</button>
            <button className="cancelBtn" aria-label="close" onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default NewTripModal;
