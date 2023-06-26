import mongoose from "mongoose";

const dataSchema = mongoose.Schema({
  name: String,
});

var Data = mongoose.model("<collection_name>", dataSchema);

export default Data;