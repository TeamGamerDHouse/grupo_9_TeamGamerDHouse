const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const multer = require('multer');
const path = require('path');
const productosController = require('../controllers/productosController');


// validaciones

const validateProducto = [
    
]


// multer

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
    cb(null, path.join(__dirname,'../../public/image/imagenArticulos'));
    },

    filename: (req, file, cb)=>{
        const newFileName = 'producto'+ Date.now() + path.extname(file.originalname);
        cb(null, newFileName); 
         
    }
});

const uploadFile = multer({ storage });






router.get('/producto/detalle/:id',productosController.productoDetalle);

router.get('/productos', productosController.allProducts);


router.get('/productos/create',productosController.crear);


router.post('/productos/create',uploadFile.single('imagen'), productosController.createProducts);

router.get('/products/:id', productosController.productsId);

//editar

router.get('/productEdit/:id',productosController.editar);

router.put('/productos/:id',uploadFile.single('productImage'), productosController.editado );

//router.delete('/productos/:id' )




module.exports = router;