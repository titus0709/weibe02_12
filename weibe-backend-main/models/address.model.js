const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  landmark: {
    type: String,
  },
  pincode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  addressType: {
    type: String,
    enum: ["home", "work", "away", "other"],
    default: "home",
    required: true,
  },
  userId: {
    type: String,

    required: true,
  },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
