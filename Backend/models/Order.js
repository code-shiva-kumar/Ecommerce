const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productname: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Order", orderSchema);
