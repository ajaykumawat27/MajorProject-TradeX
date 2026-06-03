const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// by using pre it hashes the password before saving
UsersSchema.pre("save", async function (next) {
  // and if a user only changes other fields then it doesn't hashes the hashed password again
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);//12 salt rounds
});

// module.exports = {UsersSchema};
module.exports = mongoose.model("User", UsersSchema);