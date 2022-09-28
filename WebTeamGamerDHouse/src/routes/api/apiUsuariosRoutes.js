const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');
const apiControllerUsuarios = require('../../controllers/api/apiControllerUsuarios');



router.get('/api/usuarios', apiControllerUsuarios.listadeUsuarios);

router.get('/api/usuario/:id',apiControllerUsuarios.detalleUsuario);



module.exports = router;