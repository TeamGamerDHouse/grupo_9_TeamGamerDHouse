// CONSTANTES

const express = require("express");
const app = express();
const path =require("path");

const publicPath = path.resolve(__dirname, 'public');


// MIDDELWARE
app.use(express.static(publicPath));


// RUTEO
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
    
})
/*app.get('/prueba', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/prueba.html'));
})*/

app.get('/carritocompra', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/carritocompra.html'));
})
app.get('/detalleproductos', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/detalleproductos.html'));
})

app.get('/register', (req, res)=>{

    res.sendFile(path.resolve(__dirname,'./views/register.html'));

})




// LEVANTO SERVIDOR

app.listen(3000,()=>{
    console.log("Servidor corriendo en puerto 3000");
})