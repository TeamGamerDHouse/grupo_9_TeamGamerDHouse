const path = require('path');

const db = require('../../database/models');



//controlador
const productosController = {
    crear: (req,res)=>{

        db.Producto.findAll()
            .then((productos)=>{
                return res.render('formProductos', { productos })
            });
            






    }
    
    


    



}











module.exports = productosController;