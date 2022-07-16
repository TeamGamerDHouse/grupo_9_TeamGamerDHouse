const path = require('path')
const fs = require ('fs')
const jsonPath = path.join(__dirname, '../database/products.json');

const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));


const allProducts = json.map( e => {
    return {
        id: e.id,
        categoria: e.categoria,
        nombreProducto: e.nombreProducto,
        descripcion: e.descripcion,
        precio: e.precio
        


    }
});



const controller = {

    allProducts: (req,res) => {

        res.render(path.join(__dirname,'../views/productos.ejs'),{ allProducts } );
    }
}











module.exports = controller;