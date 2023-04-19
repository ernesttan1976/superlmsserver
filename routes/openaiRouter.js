const openaiController = require("../controllers/openaiController");
const express = require("express");
const router = express.Router();

router.post("/image", openaiController.imageCreate);

module.exports = router;
