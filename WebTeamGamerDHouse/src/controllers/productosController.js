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

         db.Productos.findAll()
        //     include:[
        //         {
        //             association: 'generos'
        //         },
        //         {
        //             association:"plataformas"
        //         }
               
        //     ]
        // })
        .then(productos =>{

              

                res.render(path.join(__dirname, '../views/products/formProductos.ejs'),{productos:productos})   
    }
        )
},

    createProducts : (req, res)=>{
        
        db.Productos.create({

            

            genero:req.body.genero,
            plataforma:req.body.plataforma,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.file ? req.file.filename : productImage

            })
                .then(productos =>{
                    res.render(path.join(__dirname, '../views/products/productos.ejs'))
                });
        



    },
    productosDetalle: (req,res) =>{
        res.render(path.join(__dirname, '../views/products/detalleProductos.ejs'),{productos:productos})
       
    },
    productsId: (req, res) =>{

        db.Producto.findbyPk()
            .then()
    },
    editar:(req,res)=>{
        
        db.Producto.findByPk(req.params.id)
        .then(producto =>{
            res.render(path.join(__dirname, '../views/products/productEdit.ejs'),{producto:producto})
        });
        
    },
    editado:(req,res)=>{
        
        db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagenusuario: req.file ? req.file.filename : productImage
            
        
        },
        {
            where: {
                id:req.params.id
            }
        });
        res.redirect('/productos/'+req.params.id)


},  eliminar:(req,res)=>{
        
        db.Producto.destroy({
         where:{
              id:req.params.id
          }
     });
    
        res.redirect('/productos')
}

}









module.exports = productosController;