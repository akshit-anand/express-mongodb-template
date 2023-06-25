const express = require("express");
const router = express.Router();
const { signup, login, root } = require("../controllers/user.controller.js");
const auth = require("../auth/auth.js");

router.get("/", root);
//auth routes
router.post("/signup", signup);

router.post("/login", login);

router.get("/protected", auth.authenticateToken, (req, res) => {
  res.json({ message: "Protected route accessed" });
});

module.exports = router;
