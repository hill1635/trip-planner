import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.scss";

function SubmitBtn(props) {
  useEffect(() => {
    var submitBtn = document.querySelector(".submitBtn");

    submitBtn.addEventListener("click", () => {
      var trip = {
        startDate: document.querySelector(".startDate").value,
        endDate: document.querySelector(".endDate").value,
        startLocation: document.querySelector(".startLocation").value,
        endLocation: document.querySelector(".endLocation").value,
        stops: props.stops,
        legs: []
      };
      for (let i = 0; i < trip.stops.length; i++) {
        trip.legs = [...trip.legs, [trip.startLocation, trip.stops[i]]];
        trip.legs = [...trip.legs, [trip.endLocation, trip.stops[i]]];
        for (let j = i; j < trip.stops.length - 1; j++) {
          trip.legs = [...trip.legs, [trip.stops[i], trip.stops[j + 1]]];
        }
      }
      localStorage.setItem("newTrip", JSON.stringify(trip));
      window.location = "/results";
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
