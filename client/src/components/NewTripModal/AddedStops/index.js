import React, { useState } from "react";
import AddBtn from "../AddBtn";
import RemoveBtn from "../RemoveBtn";
import "./style.scss";

function AddedStops(props) {
  const [input, setInput] = useState("");
  var stops = [...props.stops];

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
      <AddBtn stops={stops} input={input} setStops={props.setStops} setSRC={props.setSRC}/>
    </div>
  );
}

export default AddedStops;
