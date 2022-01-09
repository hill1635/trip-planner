import React from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = [...props.stops];
  var ordered = props.ordered;

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
    console.log(src);
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
      console.log(object.waypoints);
      convertedObject.waypoints = object.waypoints.join("|").split(", ").join(",").split(" ").join("+");
    }
    generateSRC(convertedObject);
  }

  function add() {
    stops.push(props.input);
    editStop();
  }

  function editStop() {
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
    console.log(newOrdered.waypoints);
    props.setOrdered(newOrdered);
    convertFormat(props.ordered);
    props.setStops(stops);
  }

  return (
    <button className="addBtn button is-rounded is-success" onClick={add}>
      <i className="fas fa-plus plus m-0 p-0"></i>
      Add Destination
    </button>
  );
}

export default AddBtn;
