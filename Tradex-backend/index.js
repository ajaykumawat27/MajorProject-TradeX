require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {HoldingsModel} = require('./model/HoldingsModel');
const {OrdersModel} = require('./model/OrdersModel');
const {PositionsModel} = require('./model/PositionsModel');

const PORT = process.env.PORT || 8080;
const app = express();


app.get("/",(req,res)=>{
  res.send("Hi");
})

app.use(cors());
app.use(bodyParser.json());



//INITIAL DATA ADDING TO MONGO DB
// app.get("/addHoldings",async(req,res)=>{
//   let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
// ];
// tempHoldings.forEach((item)=>{
//   let newHoldingsModel = new HoldingsModel({
//     name:item.name,
//     qty:item.qty,
//     avg:item.avg,
//     price:item.price,
//     net:item.net,
//     day:item.day,
//   });
//   newHoldingsModel.save();
// });
// console.log("data insertion done");
// res.send("data insertion done");
// });

// app.get("/addOrders",async(req,res)=>{
//   let tempHoldings = [
//   { name: "RELIANCE", qty: 10, price: 2450, mode: "buy" }
//   ];
//   tempHoldings.forEach((item)=>{
//   let newOrdersModel = new OrdersModel({
//     name:item.name,
//     qty:item.qty,
//     price:item.price,
//     mode:item.mode
//   });
//   newOrdersModel.save();
// });
// console.log("data insertion done");
// res.send("data insertion done");
// });

// app.get("/addPositions",async(req,res)=>{
//     let tempHoldings = [
// {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   }
//   ];
//   tempHoldings.forEach((item)=>{
//   let newPositionsModel = new PositionsModel({
//     product:item.product,
//     name:item.name,
//     qty:item.qty,
//     avg:item.avg,
//     price:item.price,
//     net:item.net,
//     day:item.day,
//     isLoss:item.isLoss
//   });
//   newPositionsModel.save();
// });
// console.log("data insertion done");
// res.send("data insertion done");
// });


app.get('/allHoldings',async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions',async(req,res)=>{
  let allPositions= await PositionsModel.find({});
  res.json(allPositions);
});


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
  