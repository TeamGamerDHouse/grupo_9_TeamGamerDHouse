const path = require('path')
const fs = require ('fs')



const controller = {

    allProducts: (req,res) => {

        res.render(path.join(__dirname,'../views/productos.ejs'));
    }
}











module.exports = controller;