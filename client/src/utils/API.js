import axios from "axios";

export default {
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  deleteUser: function(id) {
    return axios.delete("api/users/" + id);
  },
  login: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  logout: function(userData) {
    return axios.post("/api/users/logout", userData);
  },
};
