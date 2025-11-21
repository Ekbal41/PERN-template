const express = require("express");
const protected = require("../middleware/auth");
const { helloWorld } = require("../controllers/mainController");

const router = express.Router();

router.get("/hello", protected, helloWorld);

module.exports = router;
