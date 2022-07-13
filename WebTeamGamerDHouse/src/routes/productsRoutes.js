const express = require('express');
const productsRouter = require('../controllers/productosController');
const multer = require('multer');
const path = require('path');


const router = express.Router();


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

//router.get('/products/:id', productsController.)







module.exports = router;