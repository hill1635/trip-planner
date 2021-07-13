import axios from "axios";

var apiKey = ""

export default {
  searchCoordinates: function (search) {
    return axios.get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" + search + ".json?&access_token=" + apiKey
    );
  },
};
