import React from "react";
import "./style.scss";

function RemoveBtn(props) {
    var stops = [...props.stops];

  function removeStop(stop) {
    var index = props.stops.indexOf(stop);
    var updatedStops = [...stops];
    updatedStops.splice(index, 1);
    props.setStops(updatedStops);
  }
  
  return (
    <button>
      <i className="fas fa-times" onClick={e => removeStop(e.target.parentNode.parentNode.children[0].value)}></i>
    </button>
  );
}

export default RemoveBtn;
