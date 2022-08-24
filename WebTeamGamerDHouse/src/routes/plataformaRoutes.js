const express =require('express');
const router =express.Router();
const {body}= require('express-validator');
const path=require('path');


const plataformaController = require('../controllers/plataformaController');

router.get('/productos/plataforma/crear', plataformaController.crearPLataforma);

router.post('/productos/plataforma/crear', plataformaController.plataformaCreado);

router.get('/productos/plataforma', plataformaController.plataformasListado);





module.exports= router;