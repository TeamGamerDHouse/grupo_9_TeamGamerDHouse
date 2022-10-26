const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const multer = require('multer');
const path = require('path');
const productosController = require('../controllers/productosController');
const autoriza = require('../middlewares/autoriza')

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






router.get('/producto/:id',productosController.productoDetalle);

router.get('/productos', productosController.allProducts);

router.get('/productos/buscar',productosController.buscar);


router.get('/productos/create',autoriza,productosController.crear);


router.post('/productos/create',uploadFile.single('imagen'), productosController.createProducts);



//editar

router.get('/productedit/:id',productosController.editar);

router.put('/productos/:id',autoriza,uploadFile.single('productImage'), productosController.editado );

router.delete('/productos/:id',autoriza,productosController.eliminar )




module.exports = router;