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
        const newFile = 'produc-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFile); 
         
    }
})

const uploadFile = multer({ storage });








router.get('/productos', productosController.allProducts);


router.get('/productos/create',productosController.crear);


router.post('/productos/create',uploadFile.single('product'), productosController.createProducts);

router.get('/products/:id', productosController.productsId);


//router.get('/productos/:id/edit' );

//router.put('/productos/:id' );

//router.delete('/productos/:id' )




module.exports = router;