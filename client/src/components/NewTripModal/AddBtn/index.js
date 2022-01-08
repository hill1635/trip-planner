import React from "react";
import "./style.scss";

function AddBtn(props) {
  var stops = [...props.stops];
  var orderedStops = {
    first: null,
    waypoints: [],
    last: null,
  };

  function generateSRC() {
    var googleMapsAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
    var src = "https://www.google.com/maps/embed/v1/directions?key=" + googleMapsAPIKey;
    if (orderedStops.first !== null && orderedStops.last === null) {
      src = "https://www.google.com/maps/embed/v1/place?key=" + googleMapsAPIKey + "&q=" + orderedStops.first;
    }
    if (orderedStops.last !== null) {
      src += "&origin=" + orderedStops.first + "&destination=" + orderedStops.last;
    }
    if (orderedStops.waypoints.length > 0) {
       src += "&waypoints=" + orderedStops.waypoints.join("|");
    }
    props.setSRC(src);
  }

  function convertFormat(value) {
    var convertedStr = value.split(", ").join(",").split(" ").join("+");
    if (value === orderedStops.first) {
      orderedStops.first = convertedStr;
    } else if (value === orderedStops.last) {
      orderedStops.last = convertedStr;
    } else {
      orderedStops.waypoints.push(convertedStr);
    }
  }

  function addStop() {
    stops.push(props.input);

    stops.forEach((stop) => {
      if (stops.indexOf(stop) === 0) {
        orderedStops.first = stop;
        convertFormat(orderedStops.first);
      } else if (stops.indexOf(stop) === stops.length - 1) {
        orderedStops.last = stop;
        convertFormat(orderedStops.last);
      } else {
        convertFormat(stop);
      }
    });

    props.setStops(stops);
    generateSRC();
  }

  return (
    <button className="addBtn button is-rounded is-success" onClick={addStop}>
      <i className="fas fa-plus plus m-0 p-0"></i>
      Add Destination
    </button>
  );
}

export default AddBtn;
