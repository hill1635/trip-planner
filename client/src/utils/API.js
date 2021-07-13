import axios from "axios";

export default {
  searchCoordinates: function (search) {
    return axios.get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" + search
    );
  },
};
