// Connecting to the database
import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log("Connected To Database");
}

module.exports.main();
