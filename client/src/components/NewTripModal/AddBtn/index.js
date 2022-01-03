import React, { useEffect } from "react";
import "./style.scss";

function AddBtn(props) {
  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", () => {
      // Add location to array
    });
  });

  return (
      <button className="addBtn button is-rounded is-success">
        <i className="fas fa-plus plus m-0 p-0"></i>
        Add Destination
      </button>
  );
}

export default AddBtn;
