const User = require("../model/UsersModel");
const { createSecretToken } = require("../utils/createSecretToken");
const bcryptjs = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email already exists" });
    }
    const newUser = await User.create({
      email,
      username,
      password
    });

    // it Generates token using the fun. createSecretToken present in utils
    const token = createSecretToken(newUser._id);

    //it will Set cookie
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("JwtToken", token, {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 5 * 60 * 1000 // 5 minutes in milliseconds
    });

    return res.status(201).json({ success: true, message: "Signup successful", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const auth = await bcryptjs.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const token = createSecretToken(user._id);
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("JwtToken", token, {
      httpOnly: true,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      maxAge: 5 * 60 * 1000 // 5 minutes in milliseconds
    });
    res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};