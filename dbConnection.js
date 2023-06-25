// Connecting to the database
const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(process.env.DB_URI);
  console.log("Connected To Database");
};

main().catch((err) => console.log(err));

module.exports = main;
