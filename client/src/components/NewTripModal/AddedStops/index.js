import { process_params } from "express/lib/router";
import React from "react";
import "./style.scss";

function AddedStops() {
  var stops = [];

  return (
    <div>
      {stops.map((stop) => (
        <input type="text" className="is-rounded" value={stop}>
        </input>
      ))}
      <input type="text" placeholder="Add Stop" className="is-rounded"></input>
    </div>
  );
}

export default AddedStops;
