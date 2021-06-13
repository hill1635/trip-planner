import React from "react";
import NewTripModal from "../NewTripModal";
import "./style.scss";

function StartBtn() {
  return (
    <div>
      <button className="startBtn">
        <i class="fas fa-plus plus"></i>
        Start a New Journey
      </button>
      <NewTripModal />
    </div>
  );
}

export default StartBtn;
