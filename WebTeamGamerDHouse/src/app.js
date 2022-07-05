// CONSTANTES

const express = require("express");
const app = express();
const path =require("path");

const publicPath = path.resolve(__dirname, '../public');

const mainRoutes = require('./routes/mainRoutes');

app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.use('/', mainRoutes);

// LEVANTO SERVIDOR
app.listen(3000,()=>{
    console.log("Servidor corriendo en puerto 3000");
})