const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path');

const apiControllerProductos = require('../../controllers/api/apiControllerProductos');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
    cb(null, path.join(__dirname,'../../../public/image/imagenArticulos'));
    },

    filename: (req, file, cb)=>{
        const newFileName = 'producto'+ Date.now() + path.extname(file.originalname);
        cb(null, newFileName); 
         
    }
});

const uploadFile = multer({ storage });

router.get('/api/productos',apiControllerProductos.listarProductos);
router.get('/api/productos/:id',apiControllerProductos.detalleProducto);
router.post('/api/productos/create',uploadFile.single('imagen'),apiControllerProductos.create);
router.get('/api/producto/ultimo',apiControllerProductos.ultimo);
//router.get('/api/productos/recomendado',apiControllerProductos.recomendado);

module.exports = router;