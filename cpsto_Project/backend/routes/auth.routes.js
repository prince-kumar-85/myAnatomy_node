const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Auth Routes
router.post("/register", register);
router.post("/login", login);

// Protected Route
router.get("/me", authMiddleware, (req, res) => {
  res.json({ msg: "Authenticated", user: req.user });
});

module.exports = router;
