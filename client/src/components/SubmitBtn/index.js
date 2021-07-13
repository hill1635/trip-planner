import React, { useEffect } from "react";
import API from "../../utils/API";
import "./style.scss";

function SubmitBtn(props) {
  function renderCoordinates(name) {
    API.searchCoordinates(name)
      .then((res) => {
        console.log(res);
        // saveLocation = {
        //   name: name,
        //   coordinates: {
        //     lat: res.data,
        //     lng: res.data
        //   }
        // }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    var submitBtn = document.querySelector(".submitBtn");

    submitBtn.addEventListener("click", () => {
      var trip = {
        startDate: document.querySelector(".startDate").value,
        endDate: document.querySelector(".endDate").value,
        startLocation: {
          name: document.querySelector(".startLocation").value,
          coordinates: { lat: "", lng: "" },
        },
        endLocation: {
          name: document.querySelector(".endLocation").value,
          coordinates: { lat: "", lng: "" },
        },
        stops: props.stops,
        legs: [],
      };
      renderCoordinates(trip.startLocation.name);
      for (let i = 0; i < trip.stops.length; i++) {
        trip.legs = [...trip.legs, [trip.startLocation, trip.stops[i]]];
        trip.legs = [...trip.legs, [trip.endLocation, trip.stops[i]]];
        for (let j = i; j < trip.stops.length - 1; j++) {
          trip.legs = [...trip.legs, [trip.stops[i], trip.stops[j + 1]]];
        }
      }
      localStorage.setItem("newTrip", JSON.stringify(trip));
      // window.location = "/results";
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
