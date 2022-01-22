import React, { useState } from "react";
import "./style.scss";

function AddedStops(props) {
  const [input, setInput] = useState("");
  var stopsArray = [...props.stops];
  var index = 0;

  function add() {
    props.setStops([...stopsArray, input]);
    var updatedArray = [...props.stops, input];
    props.editStops(updatedArray);
  }

  function removeStop(event) {
    var arrayIndex = event.parentNode.parentNode.getAttribute("index");
    var updatedStops = [...props.stops];
    updatedStops.splice(arrayIndex, 1);
    props.setStops(updatedStops);
    props.editStops(updatedStops);
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