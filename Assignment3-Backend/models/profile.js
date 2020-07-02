const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  fullName: {
    type: String,
    maxlength: 50,
    required: true,
  },
  addressOne: {
    type: String,
    maxlength: 100,
    required: true,
  },
  addressTwo: {
    type: String,
    maxlength: 100,
    required: false,
  },
  city: {
    type: String,
    maxlength: 100,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    maxlength: 9,
    minlength: 5,
    required: true,
  },
});

module.exports = mongoose.model("profile", profileSchema);
