const express = require('express');
const router = express.Router();

const path = require('path');

const generosController =require('../controllers/generosController');


router.get('/productos/generos/crear',generosController.crearGenero);

router.post('/productos/generos/crear',generosController.generoCreado);


router.get('/productos/generos', generosController.listadoGeneros);



module.exports =router
