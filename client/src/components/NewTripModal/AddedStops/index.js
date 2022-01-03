import React from "react";
import AddBtn from "../AddBtn";
import "./style.scss";

function AddedStops(props) {
  return (
    <div className="column is-two-fifths centered">
      <div className="columns">
        {props.stops.map((stop) => (
          <div className="column" key={stop}>
            <p>{stop}</p>
          </div>
        ))}
      </div>
      <input type="text" placeholder="Add Stop" className="addInput input is-rounded"></input>
      <AddBtn stops={props.stops} setStops={(e) => props.setStops(e)} />
    </div>
      
  );
}

export default AddedStops;
