const express = require('express');
const router = express.Router();

const mainController = require('../controllers/carritoController');


router.get('/compra', mainController.compra);

module.exports = router;
