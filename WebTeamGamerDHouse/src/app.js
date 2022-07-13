// CONSTANTES

const express = require("express");
const methodOverride = require('method-override');
const morgan = require('morgan');
const path =require("path");


const publicPath = path.join(__dirname, '../public');

// REQUIERE USO DE RUTAS
const mainRoutes = require('./routes/mainRoutes');
const carritoRoutes = require('./routes/carritoRoutes');
const productsRouter = require('./routes/productsRoutes');



// USO DE EXPRESS
const app = express();



// SETEADO DE TEMPLATES
app.set('view engine', 'ejs');



//APP USE
app.use(express.static(publicPath));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//APP USO DE LAS RUTAS

app.use(mainRoutes);
app.use(carritoRoutes);
app.use(productsRouter);


// LEVANTO SERVIDOR'
app.listen(3000,()=>{
    console.log("Servidor corriendo en puerto 3000");
})