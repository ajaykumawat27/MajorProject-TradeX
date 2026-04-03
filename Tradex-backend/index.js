require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const app = express();

mongoose.connect(process.env.ATLASDB_URL)
  .then(() => {
    console.log("Mongo connected");
    app.listen(PORT, () => console.log("app started", PORT));
  })
  .catch(err => {
    console.error("Mongo connect failed:", err.message);
    process.exit(1);
  });
  