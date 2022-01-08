import React, { useState } from "react";
import AddBtn from "../AddBtn";
import "./style.scss";

function AddedStops(props) {
  const [input, setInput] = useState("");
  var stops = [...props.stops];

  return (
    <div>
      {stops.map((stop) => (
        <input type="text" className="is-rounded" placeholder={stop} key={stop}>
        </input>
      ))}
      <input type="text" placeholder="Add Destination" className="addDestination is-rounded" onChange={e => setInput(e.target.value)}></input>
      <AddBtn stops={stops} input={input} setStops={props.setStops} setSRC={props.setSRC}/>
    </div>
  );
}

export default AddedStops;
