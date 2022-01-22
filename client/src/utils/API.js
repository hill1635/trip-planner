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
  logout: function() {
    return axios.post("/api/users/logout");
  },
  createTrip: function(tripData) {
    return axios.post("/api/trips", tripData);
  },
};
