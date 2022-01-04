import React, { useEffect } from "react";
import API from "../../../utils/API";
import "./style.scss";

function AddBtn(props) {
  var stops = [...props.stops];

  function renderCoordinates(name, saveLocation) {
    API.searchCoordinates(name)
      .then((res) => {
        saveLocation.coordinates = {
          lat: res.data.features[0].geometry.coordinates[1],
          lng: res.data.features[0].geometry.coordinates[0],
        };
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    var addBtn = document.querySelector(".addBtn");

    addBtn.addEventListener("click", () => {
      var value = { 
        name: document.querySelector(".addDestination").value,
        coordinates: {},
      };

      renderCoordinates(value.name, value);
      stops.push(value);
      props.setStops(stops);
      
      setTimeout(function () {
        document.querySelector(".addDestination").value = "";
      }, 1);
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
