const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path')
const autoriza = require('../middlewares/autoriza')

//Requiere controloador Usuarios
const usuarioController = require('../controllers/usuariosController');


//requiere express validator
const { body } = require('express-validator');


// requiere Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/image/avatar'))
    },
    filename: (req, file, cb)=>{
       
        const newFileName = 'avatar' + Date.now()+ path.extname(file.originalname)
        cb(null,newFileName);
    }

});

const uploadFile = multer({ storage });


// aplicar validaciones

const validations =[
    body('nombre').notEmpty().withMessage('Debe Completar el campo de Nombre'),
    body('apellido').notEmpty().withMessage('Debe Completar el campo de Apellido'),
    body('email').notEmpty().withMessage('Debe Completar el campo de Email').bail()
                .isEmail().withMessage('Debe ser un email valido'),
    body('password').notEmpty().withMessage('Debe Completar el campo password'),
    body('pais').notEmpty().withMessage('Debe completar el campo Pais'),
    body('ciudad').notEmpty().withMessage('Debe completar el campo Ciudad'),
    body('calle').notEmpty().withMessage('Debe completar el campo Calle'),
    body('numero').notEmpty().withMessage('Debe completar el campo número'),
       
];

//middleware

const guestMiddleware = require('../middlewares/guestMiddleware');

//ruta registro de usuario
router.get('/register',guestMiddleware ,usuarioController.register);

//ruta post del registro de usuario

router.post('/register',uploadFile.single('avatar'), validations, usuarioController.usuarioRegistrado);

// RUTA LOGIN

router.get('/login', guestMiddleware,usuarioController.login);

router.post('/login',validations,usuarioController.logueado);

router.get('/profile', usuarioController.profile);

router.get('/logout', usuarioController.logout);

//ruta de busqueda de usuario por ID
router.get('/usuarios',autoriza, usuarioController.listadeUsuarios);

router.get('/usuario/:id',usuarioController.detalleUsuario);

//editar

router.get('/usuario/editar/:id',usuarioController.editar);

router.put('/usuario/editar/:id',uploadFile.single('avatar'),validations, usuarioController.editado);


//DELETE

router.delete('/usuario/eliminar/:id', usuarioController.eliminar)






module.exports = router;