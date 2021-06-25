import React, { useEffect } from "react";
import "./style.scss";

function SubmitBtn() {
  var trip = {};

  useEffect(() => {
    var submitBtn = document.querySelector(".submitBtn");
    
    submitBtn.addEventListener("click", () => {
      trip.startDate = document.querySelector(".startDate").value;
      trip.endDate = document.querySelector(".endDate").value;
      trip.startLocation = document.querySelector(".startLocation").value;
      trip.endLocation = document.querySelector(".endLocation").value;
    });
  });

  return <button className="submitBtn">Save</button>;
}

export default SubmitBtn;
