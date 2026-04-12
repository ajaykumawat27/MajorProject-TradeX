const {model} = require('mongoose');
const { OrdersSchema } = require('../schemas/OrdersSchema');

const OrdersModel = new model("order",OrdersSchema);//order collection name

module.exports={OrdersModel};