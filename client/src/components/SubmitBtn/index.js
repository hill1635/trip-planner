import React, { useEffect } from "react";
import "./style.scss";

function SubmitBtn(props) {
  var trip = {};

  useEffect(() => {
    var submitBtn = document.querySelector(".submitBtn");
    
    submitBtn.addEventListener("click", () => {
      props.setParams({
        startDate: document.querySelector(".startDate").value,
        endDate: document.querySelector(".endDate").value,
        startLocation: document.querySelector(".startLocation").value,
        endLocation: trip.endLocation = document.querySelector(".endLocation").value
      });
    });
  });

  return <button className="submitBtn">Save</button>;
}

export default SubmitBtn;
