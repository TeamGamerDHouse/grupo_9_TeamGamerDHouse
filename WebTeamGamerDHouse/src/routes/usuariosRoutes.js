const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path')

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
    body('nombre').notEmpty().withMessage('Completar el campo de Nombre'),
    body('apellido').notEmpty().withMessage('Completar el campo de Apellido'),
    body('mailusuario').notEmpty().withMessage('Completar el campo de Email').bail()
        .isEmail().withMessage('Debe ser un email valido'),
    body('password').notEmpty().withMessage('Completar el campo password'),
    body('provincia').notEmpty().withMessage('seleccionar Provincia'),
    body('avatar').custom((value,{req})=>{
        let file = req.file;
        if (!file) {
            throw new Error ('tienes que subir una imagen')
        }
        return true;
    })

    
];

// RUTA LOGIN
router.get('/login', usuarioController.login);



//ruta registro de usuario
router.get('/register', usuarioController.register);


//ruta post del registro de usuario


router.post('/register',uploadFile.single('avatar'), validations, usuarioController.usuarioRegistrado);




//ruta de busqueda de usuario por ID
router.get('/usuarios', usuarioController.listadeUsuarios);
//router.get('/usuarios/:id', mainController.getUserId);



module.exports = router;