const controllerBarris = require('../controllers/controllerBarris')
const express = require('express');
const router = express.Router();

router.get('/barris', controllerBarris.getAllBarris);

router.get('/barri/:id', controllerBarris.getBarri);
// router.post('/product', controllerProduct.newProduct);
// router.put('/product', controllerProduct.updateProduct);
router.delete('/barri/:id', controllerBarris.deleteBarri);

module.exports = router;