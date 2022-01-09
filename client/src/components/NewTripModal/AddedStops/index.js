import React, { useState } from "react";
import RemoveBtn from "../RemoveBtn";
import "./style.scss";

function AddedStops(props) {
  const [input, setInput] = useState("");
  var stopsArray = [...props.stops];
  var index = 0;

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
 
  // **ISSUE HERE**
  function convertFormat(object) {
    // var convertedObject = {};
    
    // if (object.first !== null) {
    //   convertedObject.first = object.first.split(", ").join(",").split(" ").join("+");
    // }
    // if (object.last !== null) {
    //   convertedObject.last = object.last.split(", ").join(",").split(" ").join("+");
    // }
    // if (object.waypoints.length > 0) {
    //   convertedObject.waypoints = object.waypoints.join("|").split(", ").join(",").split(" ").join("+");
    // }
    // generateSRC(convertedObject);
  }

  function editStops(array) {
    var newOrdered = {};

    if (array.length === 1) {
      newOrdered.first = array[0];
    } else if (array.length === 2) {
      newOrdered.first = array[0];
      newOrdered.last = array[1];
    } else if (array.length > 2) {
      newOrdered.first = array[0];
      newOrdered.last = array[array.length - 1];
      var newArray = [...array];
      newArray.splice(0, 1)
      newArray.splice(newArray.length - 1, 1);
      newOrdered.waypoints = [...newArray];
    }
    
    convertFormat(newOrdered);
  }

  function add() {
    props.setStops([...stopsArray, input]);
    var updatedArray = [...props.stops, input];
    editStops(updatedArray);
  }

  function removeStop(event) {
    var index = props.stops.indexOf(stopsArray);
    var updatedStops = [...stopsArray];
    updatedStops.splice(index, 1);
    props.setStops(updatedStops);
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
