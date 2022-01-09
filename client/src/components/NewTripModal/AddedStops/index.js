import React, { useState } from "react";
import "./style.scss";

function AddedStops(props) {
  const [input, setInput] = useState("");
  var stopsArray = [...props.stops];
  var index = 0;

  function generateSRC(object) {
    var mode = "";
    var googleMapsAPIKey = "?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    var starterSRC = "https://www.google.com/maps/embed/v1/" + mode + googleMapsAPIKey;
    var waypoints = object.waypoints.length > 0 ? ("&waypoints=" + object.waypoints) : ("");

    var exportSRC = (object.origin !== null && object.destination === null) ? 
    (mode = "place", starterSRC += "&q=" + object.origin) : 
      (object.destination !== null ? 
        (
          mode = "directions", 
          starterSRC += "&origin=" + object.origin + "&destination=" + object.destination + waypoints
        ) : (""));
    props.setSRC(exportSRC);
  }
 
  function convertFormat(object) {
    var convertedObject = {};

    convertedObject.origin = object.origin !== null ?
    (object.origin.split(", ").join(",").split(" ").join("+")) : (null);

    convertedObject.destination = object.destination !== null ?
    (object.destination.split(", ").join(",").split(" ").join("+")) : (null);

    convertedObject.waypoints = object.waypoints.length > 0 ?
    (object.waypoints.join("|").split(", ").join(",").split(" ").join("+")) : ([]);

    generateSRC(convertedObject);
  }

  function editStops(array) {
    var newOrdered = {};
    
    newOrdered.origin = array.length > 0 ? (array[0]) : ("");
    newOrdered.destination = array.length > 1 ? (array[array.length - 1]): ("");
    newOrdered.waypoints = array.length > 2 ? (
      array.slice(1, array.length - 1)
    ) : ([]);

    convertFormat(newOrdered);
  }

  function add() {
    props.setStops([...stopsArray, input]);
    var updatedArray = [...props.stops, input];
    editStops(updatedArray);
  }

  function removeStop(event) {
    var arrayIndex = event.parentNode.parentNode.getAttribute("index");
    var updatedStops = [...props.stops];
    updatedStops.splice(arrayIndex, 1);
    props.setStops(updatedStops);
    editStops(updatedStops);
  }

  return (
    <div>
      <ul>
      {props.stops.map((stop) => (
        <div className="is-inline-flex" key={index++} index={index}>
        {/* <input type="text" className="is-rounded" value={stop} key={stop} onChange={e => test(e.target.value)}> */}
          <p>{stop}</p>
        {/* </input> */}
        <button>
          <i className="fas fa-times" onClick={e => removeStop(e.target)}></i>
         </button>
        </div>
      ))}
      </ul>
      <input type="text" placeholder="Add Destination" className="addDestination is-rounded" onChange={e => setInput(e.target.value)}></input>
      <button className="addBtn button is-rounded is-success" onClick={add}>
        <i className="fas fa-plus plus m-0 p-0"></i>
        Add Destination
      </button>
    </div>
  );
}

export default AddedStops;
