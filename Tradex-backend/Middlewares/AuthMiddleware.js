const User = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    //  console.log("cookies : " , req.cookies);
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false });
    }
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);
    if (!user) {
      return res.json({ status: false });
    }
    return res.json({
      status: true,
      user: user.username,
    });
  } catch (err) {
    console.log(err);
    return res.json({ status: false });
  }
};
