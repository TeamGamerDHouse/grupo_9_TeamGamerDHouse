// CONSTANTES

const express = require("express");
const methodOverride = require('method-override');
const morgan = require('morgan');
const path =require("path");


const publicPath = path.join(__dirname, '../public');

// REQUIERE USO DE RUTAS
const usuariosRoutes = require('./routes/usuariosRoutes');
const productsRouter = require('./routes/productsRoutes');
const generosRoutes =require('./routes/generosRoutes');
const plataformaRutes =require('./routes/plataformaRoutes');
const indexRoutes = require ('./routes/indexRoutes');





// USO DE EXPRESS
const app = express();



// SETEADO DE TEMPLATES
app.set('view engine', 'ejs');



//APP USE
app.use(express.static(publicPath));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


//APP USO DE LAS RUTAS


app.use(indexRoutes);
app.use(usuariosRoutes);
app.use(productsRouter);
app.use(generosRoutes);
app.use(plataformaRutes);






// LEVANTO SERVIDOR'
app.listen(3000,()=>{
    console.log("Servidor corriendo en puerto 3000");
})