const express = require("express");
const s3Controller = require("../controllers/s3Controller");
const multer = require('multer');
const router = express.Router();
const upload = multer({dest: 'uploads/'});

// start from /courses
router.post("/upload", upload.single('file'), s3Controller.uploadFile);
router.delete("/delete/:key", s3Controller.deleteFile);

module.exports = router;
