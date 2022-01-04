import React from "react";
import AddBtn from "../AddBtn";
import "./style.scss";

function AddedStops(props) {
  var stops = [...props.stops];

  return (
    <div>
      {stops.map((stop) => (
        <input type="text" className="is-rounded" placeholder={stop.name} key={stop.name}>
        </input>
      ))}
      <input type="text" placeholder="Add Destination" className="addDestination is-rounded"></input>
      <AddBtn stops={stops} setStops={props.setStops}/>
    </div>
  );
}

export default AddedStops;
