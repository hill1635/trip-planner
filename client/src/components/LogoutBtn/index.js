import { process_params } from "express/lib/router";
import React from "react";
import API from "../../utils/API";

function LogoutBtn(props) {

  function logout() {
    props.setLoggedIn(false);
    API.logout();
  }

  return (
    <button className={props.display.logoutBtn} onClick={logout}>
      Log Out
    </button>
  );
}

export default LogoutBtn;
