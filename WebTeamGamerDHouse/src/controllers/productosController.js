//const { dirname } = require('path');

const path = require('path');
const db = require('../../database/models/index');




//controlador
const productosController = {



    allProducts:(req,res)=>{
        
        db.Productos.findAll()
            .then(productos=>{
                
                return res.render(path.join(__dirname, '../views/products/productos.ejs'),{ productos:productos })
            });

    },

   
    
    crear: (req,res)=>{

        db.Productos.findAll({
            include:[
                {
                    association: 'generos'
                },
                {
                    association:"plataformas"
                }
               
            ]
        })
            .then (productos =>{

                

                res.render(path.join(__dirname, '../views/products/formProductos.ejs'),{productos:productos})
            });

        
        
    },

    createProducts: (req, res)=>{

        db.Producto.create({

            genero:req.body.genero,
            plataforma:req.body.plataforma,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.file ? req.file.filename : productImage

            })
                .then(productos =>{
                    res.render('productos')
                });
        



    },
    productsId: (req, res) =>{

        db.Producto.findbyPk()
            .then()
    }



    
    
    


    



}











module.exports = productosController;