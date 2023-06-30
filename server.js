const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
const routes = require("./routes/routes.js");
const userRoutes = require("./routes/user.routes.js");
const mongoose = require("mongoose");

const app = express();

// Parsing application/json
app.use(express.json());
// Parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());
dotenv.config();

// Connecting to the database
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to Database!"))
  .catch((err) => console.error("Something went wrong", err));

app.use(routes);
app.use(userRoutes);

app.listen(port, () =>
  console.log(`Express Server is Running at http://localhost:${port}`)
);
