const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be required"],
    unique: [true, "Name of hotel must be unique"],
  },
  cost: {
    type: Number,
    required: [true, "Cost of hotel is required"],
  },
  description: String,
});

const HotelModel = mongoose.model("Hotel", hotelSchema);

module.exports = HotelModel;
