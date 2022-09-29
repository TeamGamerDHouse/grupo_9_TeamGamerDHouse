const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const apiControllerProductos = require('../../controllers/api/apiControllerProductos');


router.get('/api/productos',apiControllerProductos.listarProductos);
router.get('/api/productos/:id',apiControllerProductos.detalleProducto);

module.exports = router;