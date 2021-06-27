import React, { useEffect } from "react";
import "./style.scss";

function SubmitBtn(props) {

  useEffect(() => {
    var submitBtn = document.querySelector(".submitBtn");
    submitBtn.addEventListener("click", () => {
      props.setParams({
        startDate: document.querySelector(".startDate").value,
        endDate: document.querySelector(".endDate").value,
        startLocation: document.querySelector(".startLocation").value,
        endLocation: document.querySelector(".endLocation").value
      });
    });
  });

  return (
  <button className="submitBtn button is-info is-rounded mr-3">
    <i class="fas fa-save mr-1"></i>
    Save
    </button>
  );
}

export default SubmitBtn;
