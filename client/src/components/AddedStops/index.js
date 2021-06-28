import React, { useEffect } from "react";
import "./style.scss";

function AddedStops(props) {
  return (
    <div className="columns">
      {props.stops.map((stop) => {
        <div className="column">
          <p>{stop}</p>
        </div>;
      })}
    </div>
  );
}

export default AddedStops;
