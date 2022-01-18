import axios from "axios";

var apiKey = process.env.REACT_APP_MAPBOX_API_KEY;

export default {
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  deleteUser: function(id) {
    return axios.delete("api/books/" + id);
  },
  login: function(userData) {
    return axios.post("/api/users/login", userData);
  },
};
