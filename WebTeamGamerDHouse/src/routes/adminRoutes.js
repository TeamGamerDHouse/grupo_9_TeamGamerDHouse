const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/administrar', adminController.vista)
router.get('/search',adminController.search);
router.get('/search/categoria',adminController.searchCategoria);




module.exports = router;