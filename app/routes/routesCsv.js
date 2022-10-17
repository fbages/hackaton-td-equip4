const controllerCsv = require('../controllers/controllerCsv');
const express = require('express');
const router = express.Router();

const multer = require('multer');
var upload = multer({ dest: '__tests__/' });


router.post('/convertidorcsv',upload.single('file'), controllerCsv.csvToJson);

module.exports = router;