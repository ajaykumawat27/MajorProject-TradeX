const {model} = require('mongoose');
const { HoldingsSchema } = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding",HoldingsSchema);//holding collection name

module.exports={HoldingsModel};