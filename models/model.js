const mongoose = require("mongoose");

// Schema will be written here
const dataSchema = mongoose.Schema({
  name: String,
});

var Data = mongoose.model("<data_collection>", dataSchema);

module.exports = Data;
