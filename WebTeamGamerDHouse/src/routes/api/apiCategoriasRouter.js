const express = require('express');
const router = express.Router();

const apiControllerCategoria =require('../../controllers/api/apiControllerCategoria')


router.get('/api/categorias', apiControllerCategoria.listar);
router.get('/api/categorias/:id',apiControllerCategoria.porid);




module.exports= router;
