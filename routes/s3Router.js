const express = require("express");
const formidable = require("express-formidable");

const router = express.Router();

// controllers
const s3Controller = require("../controllers/s3Controller");

router.post("/upload-image", s3Controller.uploadImage);
router.post("/remove-image", s3Controller.removeImage);
router.post("/upload-video", formidable(), s3Controller.uploadVideo);
router.post("/remove-video", s3Controller.removeVideo);

module.exports = router;
