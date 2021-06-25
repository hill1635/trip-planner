import React, { useState, useEffect } from "react";
import AddBtn from "../AddBtn";
import SubmitBtn from "../SubmitBtn";
import CancelBtn from "../CancelBtn";
import "./style.scss";

function NewTripModal() {
  const [state, setState] = useState("modal newTripModal");
  const [stops, setStops] = useState([]);

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
          <input type="text" className="addInput"></input>
          <AddBtn stops={stops} setStops={(e)=>setStops(e)}/>
          <SubmitBtn />
          <CancelBtn close={close}/>
        </div>
      </div>
    </div>
  );
}

export default NewTripModal;
