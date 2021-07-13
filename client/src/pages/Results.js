import React from "react";
import API from "../utils/API";

function Results() {
    var newTrip = JSON.parse(localStorage.getItem("newTrip"));
    console.log(newTrip);
    return (
        <div></div>
    );
}

export default Results;