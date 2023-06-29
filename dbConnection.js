// Connecting to the database
const mongoose = require("mongoose");

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected To Database");
  } catch (err) {
    return console.log(err);
  }
};

module.exports = main;
