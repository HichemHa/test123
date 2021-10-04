const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  password: String,
  isAdmin: {
    type: Boolean,
    default:false
  }
});

module.exports = User = mongoose.model("user", userSchema);
