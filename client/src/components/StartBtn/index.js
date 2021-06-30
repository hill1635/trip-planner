import React from "react";
import NewTripModal from "../NewTripModal";
import "./style.scss";

function StartBtn() {
  return (
    <div>
      <button className="startBtn button is-rounded is-success">
        <i className="fas fa-plus plus"></i>
        Start a New Journey
      </button>
      <NewTripModal />
    </div>
  );
}

export default StartBtn;
