import React, { useState, useEffect } from "react";
import AddBtn from "../AddBtn";
import SubmitBtn from "../SubmitBtn";
import CancelBtn from "../CancelBtn";
import "./style.scss";

function NewTripModal() {
  const [state, setState] = useState("modal newTripModal");
  const [params, setParams] = useState({});
  const [stops, setStops] = useState([]);

  var trip = {
    params: params,
    stops: stops,
  };

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
            <div className="columns">
              <div className="column centered mr-0 is-one-third">
                <input type="text" placeholder="Start Date" className="startDate input is-rounded"></input>
              </div>
              <div className="column centered ml-0 is-one-third">
                <input type="text" placeholder="End Date" className="endDate input is-rounded"></input>
              </div>
            </div>
            <div className="columns">
              <div className="column mr-0 centered is-one-third">
                <input type="text" placeholder="Start Location"  className="startLocation input is-rounded"></input>
              </div>
              <div className="column ml-0 centered is-one-third">
                <input type="text" placeholder="End Location" className="endLocation input is-rounded"></input>
              </div>
            </div>
          </div>
          <div className="column is-three-fifths centered">
            <input type="text" placeholder="Add Stop" className="addInput is-hidden"></input>
            <AddBtn stops={stops} setStops={(e) => setStops(e)} />
          </div>
          <SubmitBtn params={params} setParams={(e) => setParams(e)} />
          <CancelBtn close={close} />
        </div>
      </div>
    </div>
  );
}

export default NewTripModal;
