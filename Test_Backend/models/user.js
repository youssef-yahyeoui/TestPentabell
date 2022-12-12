const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  token: { type: String },
});

module.exports = mongoose.model("user", userSchema);
