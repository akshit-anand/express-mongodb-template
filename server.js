import express from "express";
import cors from "cors";
const port = process.env.PORT || 8000;
import dotenv from "dotenv";
import todoRoutes from "./routes/routes.js";

const app = express();

// Parsing application/json
app.use(express.json());
// Parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

dotenv.config();

app.use(todoRoutes);

//Set up mongodb connection wih mongoose
import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log("Connected To Database");
}

app.listen(port, () =>
  console.log(`Express Server is Running at http://localhost:${port}`)
);