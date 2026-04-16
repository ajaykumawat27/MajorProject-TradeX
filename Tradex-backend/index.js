require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");

// Cross-Origin Resource Sharing
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
  })
);


const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const {HoldingsModel} = require('./model/HoldingsModel');
const {OrdersModel} = require('./model/OrdersModel');
const {PositionsModel} = require('./model/PositionsModel');

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
const authRoute = require('./Routes/AuthRoute');

//authentication route
app.use('/auth',authRoute);


app.get("/",(req,res)=>{
  res.send("Hi root");
})

// all holdings route
 app.get('/allHoldings',async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// all positions route
app.get('/allPositions',async(req,res)=>{
  let allPositions= await PositionsModel.find({});
  res.json(allPositions);
});

// new order route
app.post("/newOrder",async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });
  newOrder.save();
  res.send("order saved");
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
  
