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

const upload = multer({ storage });




// rutas de paginas referente a generos
router.get('/productos/generos/crear',productosController.crearGenero);

router.post('/productos/generos/crear',productosController.generoCreado);


router.get('/productos/generos', productosController.listadoGeneros);

// rutas de paginas de referentes a plataformas

router.get('/productos/plataforma/crear', productosController.crearPLataforma);

router.post('/productos/plataforma/crear', productosController.plataformaCreado);

router.get('/productos/plataforma', productosController.plataformasListado);



//router.get('/productos', productsRouter.allProducts);


router.get('/productos/create',productosController.crear);

// mejorar controllers

//router.post('/productos/create',productsRouter.createProducts);

//router.get('/products/:id', productsRouter.productsId);


//router.get('/productos/:id/edit' );

//router.put('/productos/:id' );

//router.delete('/productos/:id' )




module.exports = router;