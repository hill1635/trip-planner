import React from "react";
import API from "../../utils/API";

function deleteAccount() {
  API.deleteUser();
}

function DeleteAcctBtn() {
  return <button onClick={deleteAccount}>Delete Account</button>;
}

export default DeleteAcctBtn;
