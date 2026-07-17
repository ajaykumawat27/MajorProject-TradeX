require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

// Cross-Origin Resource Sharing
app.use(
  cors({
    origin: [
      // in production
      process.env.REACT_APP_FRONTEND_URL,
      process.env.REACT_APP_DASHBOARD_URL,

      // in developement
      // "http://localhost:3000",//dashboard
      // "http://localhost:5000",//frontend
    ],
    credentials: true,
  })
);


const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require('./model/HoldingsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { PositionsModel } = require('./model/PositionsModel');

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const authRoute = require('./Routes/AuthRoute');
const { verifyToken } = require('./Middlewares/AuthMiddleware');

//authentication route
app.use('/auth', authRoute);

app.get("/", (req, res) => {
  res.send("Hi root");
})

// all holdings route
app.get('/allHoldings', verifyToken, async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// all positions route
app.get('/allPositions', verifyToken, async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// new order route
app.post("/newOrder", verifyToken, async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });
  await newOrder.save();
  res.send("order saved");
});

app.get("/check-auth", verifyToken, (req, res) => {
  res.json({ ok: true, user: req.user.username });
});

mongoose.connect(process.env.ATLASDB_URL)
  .then(() => {
    console.log("Mongo connected");
    app.listen(PORT, () => console.log("http://localhost:8080"));
  })
  .catch(err => {
    console.error("Mongo connect failed:", err.message);
    process.exit(1);
  });

