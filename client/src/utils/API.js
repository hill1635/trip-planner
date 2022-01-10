import axios from "axios";

var apiKey = process.env.REACT_APP_MAPBOX_API_KEY;

export default {
  searchCoordinates: function (search, saveLocation) {
    return axios.get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" + search + ".json?&access_token=" + apiKey
    );
  },
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
