const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Incorrect email format"],
  },
  password: {
    type: String,
    match: [/((?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8})/i],
  },
});

module.exports = mongoose.models?.User ?? mongoose.model("User", userSchema);
