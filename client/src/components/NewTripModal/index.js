import React, { useState, useEffect } from "react";
import AddedStops from "./AddedStops";
import SubmitBtn from "./SubmitBtn";
import CancelBtn from "./CancelBtn";
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
      <div className="modal-card newTripBox has-text-centered">
        <div className="modal-header">
          <h1 className="title">New Journey</h1>
        </div>
        <div className="modal-content column is-full">
          <div className="column">
            <AddedStops stops={stops} setStops={setStops}/>
          </div>
          <SubmitBtn/>
          <CancelBtn close={close} />
        </div>
      </div>
    </div>
  );
}

export default NewTripModal;
