const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  origin: {
    type: String,
  },
  destination: {
    type: String,
  },
  waypoints: {
    type: Array,
  },
  createdBy: {
    type: mongoose.ObjectId,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Trip = mongoose.model("Trip", TripSchema);

module.exports = Trip;
