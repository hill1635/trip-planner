import React from "react";
import API from "../../utils/API";

function LogoutBtn() {

  return <button className="button" onClick={API.logout}>Log Out</button>;
}

export default LogoutBtn;
