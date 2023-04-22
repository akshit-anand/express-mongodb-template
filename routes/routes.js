import express from "express";
const router = express.Router();
import {
  getAll,
  getById,
  createNew,
  updateOne,
  deleteOne,
} from "../controllers/controller.js";

//get all data
router.get("/", getAll);

//get data by id
router.get("/:id", getById)

//create new
router.post("/", createNew);

//update
router.patch("/:id", updateOne);

//delete
router.delete("/:id", deleteOne);

export default router;