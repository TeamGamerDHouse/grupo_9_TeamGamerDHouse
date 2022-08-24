const express = require('express');
const router = express.Router();
const path = require('path');

const indexController = require('../controllers/indexController');




router.get('/', indexController.vista);



module.exports =router;
