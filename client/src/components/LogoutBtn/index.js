import React from "react";
import API from "../../utils/API";

function LogoutBtn(props) {

  function logout() {
    props.setLoggedIn(false);
    API.logout();
  }

  return (
    <button className="button" onClick={logout}>
      Log Out
    </button>
  );
}

export default LogoutBtn;
