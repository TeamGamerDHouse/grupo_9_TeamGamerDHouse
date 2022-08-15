const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const multer = require('multer');
const path = require('path');
const productsRouter = require('../controllers/productosController');


// validaciones

const validateProducto = [
    
]


// multer

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
    cb(null, path.join(__dirname,'../../public/image/imagenArticulos'));
    },

    filename: (req, file, cb)=>{
        const newFile = 'produc-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFile); 
         
    }
})

const upload = multer({ storage });




//rutas


router.get('/productos', productsRouter.allProducts);


router.get('/productos/create',productsRouter.createProductos);

// mejorar controllers

router.post('/productos/create',productsRouter.createProducts);

router.get('/products/:id', productsRouter.productsId);


router.get('/productos/:id/edit' );

router.put('/productos/:id' );

router.delete('/productos/:id' )




module.exports = router;