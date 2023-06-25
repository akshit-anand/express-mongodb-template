const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
const routes = require("./routes/user.routes.js");

const app = express();

// Parsing application/json
app.use(express.json());
// Parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());
dotenv.config();

// Connecting to the database
require("./dbConnection");

app.use(routes);

app.listen(port, () =>
  console.log(`Express Server is Running at http://localhost:${port}`)
);
