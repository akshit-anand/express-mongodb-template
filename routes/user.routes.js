const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/user.controller.js");

//auth routes
router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
