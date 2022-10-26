// CONSTANTES

const express = require("express");
const methodOverride = require('method-override');
const morgan = require('morgan');
const path =require("path");
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const cors = require('cors');



const userLogueadoMiddleware= require('./middlewares/userLogueadoMiddleware');
const publicPath = path.join(__dirname, '../public');

// REQUIERE USO DE RUTAS
const usuariosRoutes = require('./routes/usuariosRoutes');
const productsRouter = require('./routes/productsRoutes');
const adminRoutes = require('./routes/adminRoutes');
const indexRoutes = require ('./routes/indexRoutes');
const apiRoutes =require('./routes/api/apiUsuariosRoutes');
const apiRoutesProductos = require('./routes/api/apiProductosRoutes');
const apiCategoriasRouter = require('./routes/api/apiCategoriasRouter');






// USO DE EXPRESS
const app = express();



// SETEADO DE TEMPLATES
app.set('view engine', 'ejs');



//APP USE
app.use(express.static(publicPath));
app.use(session({
    secret:'es un secreto',
    resave: false,
    saveUninitialized: false,
}));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(userLogueadoMiddleware);
app.use(cors());



//APP USO DE LAS RUTAS


app.use(indexRoutes);
app.use(usuariosRoutes);
app.use(productsRouter);
app.use(adminRoutes);
app.use(apiCategoriasRouter);


//APP USO DE RUTAS API
app.use(apiRoutes);
app.use(apiRoutesProductos);

app.use((req,res,next)=>{
    res.status(404).render(path.join(__dirname,'../src/views/error404.ejs'))
});





// LEVANTO SERVIDOR'
app.listen(3002,()=>{
    console.log("Servidor corriendo en puerto 3002");
})