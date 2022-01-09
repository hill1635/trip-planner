import React, { useState } from "react";
import AddBtn from "../AddBtn";
import RemoveBtn from "../RemoveBtn";
import "./style.scss";

function AddedStops(props) {
  const [input, setInput] = useState("");
  const [ordered, setOrdered] = useState({
    first: null,
    waypoints: [],
    last: null,
  });
  var stops = [...props.stops];

  function generateSRC(object) {
    var googleMapsAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
    var src =
      "https://www.google.com/maps/embed/v1/directions?key=" + googleMapsAPIKey;
    if (object.first !== null && object.last === null) {
      src =
        "https://www.google.com/maps/embed/v1/place?key=" +
        googleMapsAPIKey +
        "&q=" +
        object.first;
    }
    if (object.last !== null) {
      src += "&origin=" + object.first + "&destination=" + object.last;
    }
    if (object.waypoints.length > 0) {
      src += "&waypoints=" + object.waypoints;
    }
    props.setSRC(src);
  }
 
  function convertFormat(object) {
    var convertedObject = {
      first: "",
      last: "",
      waypoints: "",
    };
    
    if (object.first !== null) {
      convertedObject.first = object.first.split(", ").join(",").split(" ").join("+");
    }
    if (object.last !== null) {
      convertedObject.last = object.last.split(", ").join(",").split(" ").join("+");
    }
    if (object.waypoints.length > 0) {
      convertedObject.waypoints = object.waypoints.join("|").split(", ").join(",").split(" ").join("+");
    }
    console.log(object);
    generateSRC(convertedObject);
  }

  function editStops() {
    var newOrdered = ordered;
    
    stops.forEach((stop) => {
      if (stops.indexOf(stop) === 0) {
        newOrdered.first = stop;
      } else if (stops.indexOf(stop) === stops.length - 1) {
        newOrdered.last = stop;
      } else {
        if (!newOrdered.waypoints.includes(stop)) {
        newOrdered.waypoints.push(stop);
        }
      }
    });
    setOrdered(newOrdered);
    convertFormat(ordered);
    props.setStops(stops);
  }

  function add() {
    props.setStops([...stops, props.input]);
    editStops();
  }


  return (
    <div>
      {stops.map((stop) => (
        <div className="is-inline-flex">
        <input type="text" className="is-rounded" value={stop} key={stop}>
        </input>
        <RemoveBtn setStops={props.setStops} stops={stops}/>
        </div>
      ))}
      <input type="text" placeholder="Add Destination" className="addDestination is-rounded" onChange={e => setInput(e.target.value)}></input>
      <AddBtn stops={stops} setStops={props.setStops} input={input} editStops={editStops}/>
    </div>
  );
}

export default AddedStops;
