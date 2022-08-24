//const { dirname } = require('path');

const path = require('path');
const db = require('../../database/models/index');




//controlador
const productosController = {


   
    
    crear: (req,res)=>{

        db.Productos.findAll({
            include:[
                {
                    association: 'generos'
                }
               
            ]
        })
            .then (productos =>{

                res.render(path.join(__dirname, '../views/products/formProductos.ejs'),{productos:productos})
            });

        
        
    },

    createProducts: (req, res)=>{
        



    },

    
    
    


    



}











module.exports = productosController;