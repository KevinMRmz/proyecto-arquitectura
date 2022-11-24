const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided"],
    minLength: [3, "Name must have at least 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email must be required"],
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: "{VALUE} is not a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must be at least 6 characters long"],
  },
  hotels: {
    type: [mongoose.Types.ObjectId],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
