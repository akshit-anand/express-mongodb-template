const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  name: String,
});

var Data = mongoose.model("<data_collection>", dataSchema);

module.exports = Data;
