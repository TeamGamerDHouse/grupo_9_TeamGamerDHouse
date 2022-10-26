//const { dirname } = require('path');

const path = require('path');
const db = require('../../database/models/index');
const { Op } = require("sequelize");




//controlador
const productosController = {



    allProducts:(req,res)=>{
        
        db.Producto.findAll({
             include:[
                {
                association : "categoria"},
                {
                association : "genero"    
                }]},{
                    order:[
                        ['categoria_id','ASC']
                        ['nombbre', 'ASC']
                ]
                }
        )
            .then(productos=>{
                                
                return res.render(path.join(__dirname, '../views/products/productos.ejs'),{ productos })
            });

    },

   
    
    crear: (req,res)=>{

        let gener = db.Genero.findAll();
        let categ = db.Categoria.findAll();

        Promise
        .all([gener,categ])
        .then(([allgeneros, allcategorias]) =>{
            return res.render(path.join(__dirname, '../views/products/formProductos.ejs'),{allgeneros, allcategorias})
        })

        //  db.Producto.findAll({
        //     include:[{
        //         association : "pgeneros"
        //     },{
        //         association: "pcategorias"
        //     }]
        //  })
        //     .then(productos =>{

        //        res.render(path.join(__dirname, '../views/products/formProductos.ejs'),{productos:productos})   
    
        
},

    createProducts : (req, res)=>{
        
        db.Producto.create({

            

            genero_id: req.body.genero,
            categoria_id :req.body.categoria,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.file ? req.file.filename : productImage

            })
                .then(productos =>{
                    res.redirect('/productos')
                });
        



    },
    productoDetalle: (req,res) =>{
             db.Producto.findByPk(req.params.id)
                 .then(productos =>{
                     res.render(path.join(__dirname,'../views/products/detalleProductos.ejs'),{productos})
                 });
        
       
    },
   
    editar:(req,res)=>{
        
        db.Producto.findByPk(req.params.id)
        .then(producto =>{
            res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{producto:producto})
        });
        
    },
    editado:(req,res)=>{
        
        db.Producto.update({
            genero_id: req.body.genero,
            categoria_id :req.body.categoria,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.file ? req.file.filename : productImage
            
        
        },
        {
            where: {
                id:req.params.id
            }
        });
        res.redirect('/producto/detalle/'+req.params.id)


},  eliminar:(req,res)=>{
        
        db.Producto.destroy({
         where:{
              id:req.params.id
          }
     });
    
        res.redirect('/productos')
},
    buscar :  (req,res) =>{
        
        db.Producto.findAll({
           
            where:{
                nombre : {[Op.like]:`%${req.query}%`}
            }
        }).then(productos =>{
            res.render(path.join(__dirname,'../views/products/productos.ejs'),{ productos }) 

        }).catch(error =>{
            console.log(error)
        })


       
    }

    
}









module.exports = productosController;