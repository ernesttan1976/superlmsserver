const openaiController = require("../controllers/openaiController");
const express = require("express");
const router = express.Router();

router.get("/:id", openaiController.getMessages);
router.post("/:id", openaiController.postMessage);
router.post("/openai/:id", openaiController.postMessageToBot);

module.exports = router;
