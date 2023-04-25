const express = require("express");
const s3Controller = require("../controllers/s3Controller");
const formidable = require("express-formidable");
const router = express.Router();

router.post("/image-upload", s3Controller.uploadImage);
router.post("/video-upload", formidable(), s3Controller.uploadVideo);
router.delete("/image-remove/:key", s3Controller.removeImage);
router.delete("/video-remove/:key", s3Controller.removeVideo);

module.exports = router;
