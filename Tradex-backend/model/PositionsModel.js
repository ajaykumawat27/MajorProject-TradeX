const {model} = require('mongoose');
const { PositionsSchema } = require('../schemas/PositionsSchema');

const PositionsModel = new model("position",PositionsSchema);//position collection name

module.exports={ PositionsModel };
