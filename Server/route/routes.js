const express = require("express");

const { uploadImage,downloadData } = require("../Controller/Image-controller");
const upload = require("../Middleware/upload")
const router = express.Router();

router.post('/upload',upload.single('file'), uploadImage);
router.get('/file/:fileId',downloadData);

module.exports = router; // Corrected this line
