import { process_params } from "express/lib/router";
import React from "react";
import AddBtn from "../AddBtn";
import "./style.scss";

function AddedStops(props) {
  var stops = [...props.stops];

  return (
    <div>
      {stops.map((stop) => (
        <input type="text" className="is-rounded" value={stop}>
        </input>
      ))}
      <input type="text" placeholder="Add Stop" className="is-rounded"></input>
      <AddBtn/>
    </div>
  );
}

export default AddedStops;
