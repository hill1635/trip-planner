import React from "react";

function Results() {
    var newTrip = JSON.parse(localStorage.getItem("newTrip"));
    console.log(newTrip);
    return (
        <div></div>
    );
}

export default Results;