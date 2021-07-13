import React, { useEffect } from "react";
import "./style.scss";

function SubmitBtn(props) {
  useEffect(() => {
    var submitBtn = document.querySelector(".submitBtn");
    var legs = [];

    submitBtn.addEventListener("click", () => {
      var trip = {
        startDate: document.querySelector(".startDate").value,
        endDate: document.querySelector(".endDate").value,
        startLocation: document.querySelector(".startLocation").value,
        endLocation: document.querySelector(".endLocation").value,
        stops: props.stops,
      };
      for (let i = 0; i < trip.stops.length; i++) {
        legs.push([trip.startLocation, trip.stops[i]]);
        legs.push([trip.endLocation, trip.stops[i]]);
        for (let j = i; j < trip.stops.length - 1; j++) {
          legs.push([trip.stops[i], trip.stops[j + 1]]);
        }
        console.log(legs);
      }
    });
  });

  return (
    <button className="submitBtn button is-info is-rounded mr-3">
      <i className="fas fa-save mr-1"></i>
      Save
    </button>
  );
}

export default SubmitBtn;
