import React, { useState, useEffect } from "react";
import AddedStops from "./AddedStops";
import SubmitBtn from "./SubmitBtn";
import CancelBtn from "./CancelBtn";
import "./style.scss";

function NewTripModal() {
  const [state, setState] = useState("modal newTripModal");
  const [stops, setStops] = useState([]);
  const [src, setSRC] = useState("");

  useEffect(() => {
    var startBtn = document.querySelector(".startBtn");
    startBtn.addEventListener("click", () => {
      setState("modal newTripModal is-active");
    });
  });

  function generateSRC(object) {
    var mode = "";
    var googleMapsAPIKey = "?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    var starterSRC =
      "https://www.google.com/maps/embed/v1/" + mode + googleMapsAPIKey;
    var waypoints =
      object.waypoints.length > 0 ? "&waypoints=" + object.waypoints : "";

    var exportSRC =
      object.origin !== null && object.destination === null
        ? ((mode = "place"), (starterSRC += "&q=" + object.origin))
        : object.destination !== null
        ? ((mode = "directions"),
          (starterSRC +=
            "&origin=" +
            object.origin +
            "&destination=" +
            object.destination +
            waypoints))
        : "";
    setSRC(exportSRC);
  }

  function convertFormat(object) {
    var convertedObject = {};

    convertedObject.origin =
      object.origin !== null
        ? object.origin.split(", ").join(",").split(" ").join("+")
        : null;

    convertedObject.destination =
      object.destination !== null
        ? object.destination.split(", ").join(",").split(" ").join("+")
        : null;

    convertedObject.waypoints =
      object.waypoints.length > 0
        ? object.waypoints.join("|").split(", ").join(",").split(" ").join("+")
        : [];
    generateSRC(convertedObject);
  }

  function editStops(array) {
    var newOrdered = {};

    newOrdered.origin = array.length > 0 ? array[0] : null;
    newOrdered.destination = array.length > 1 ? array[array.length - 1] : null;
    newOrdered.waypoints =
      array.length > 2 ? array.slice(1, array.length - 1) : [];
    convertFormat(newOrdered);
  }

  function close() {
    setState("modal newTripModal");
    setStops([]);
  }

  return (
    <div className={state}>
      <div className="modal-background"></div>
      <div className="modal-card newTripBox has-text-centered">
        <div className="modal-header">
          <h1 className="title">New Journey</h1>
        </div>
        <div className="modal-content columns is-full">
          <div className="column">
            <AddedStops
              stops={stops}
              setStops={setStops}
              setSRC={setSRC}
              editStops={editStops}
            />
          </div>
          <div className="column">
            {/* <iframe
              width="450"
              height="250"
              src={src}
              allowfullscreen
            ></iframe> */}
          </div>
          <SubmitBtn />
          <CancelBtn close={close} />
        </div>
      </div>
    </div>
  );
}

export default NewTripModal;
