const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // username: {
  //   type: String,
  //   trim: true,
  //   required: "Username is required.",
  // },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address."],
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required.",
    validate: [({ length }) => length >= 8, "Password needs to be longer."],
  },

  userCreated: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;