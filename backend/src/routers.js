const express = require("express");
const authRoutes = require("./routes/auth");
const systemRoutes = require("./routes/system");
const mainRoutes = require("./routes/main");
const verifyRoutes = require("./routes/verify");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/system", systemRoutes);
router.use("/main", mainRoutes);
router.use("/verify", verifyRoutes);

module.exports = router;
