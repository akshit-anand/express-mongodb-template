const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  createNew,
  updateOne,
  deleteOne,
} = require("../controllers/controller.js");
const auth = require("../auth/auth.js");

//get all data
router.get("/all", auth.authenticateToken, getAll);

//get data by id
router.get("/all/:id", auth.authenticateToken, getById);

//create new
router.post("/create", auth.authenticateToken, createNew);

//update
router.patch("/update/:id", auth.authenticateToken, updateOne);

//delete
router.delete("/delete/:id", auth.authenticateToken, deleteOne);

module.exports = router;
