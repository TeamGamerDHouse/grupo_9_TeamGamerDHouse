const path = require('path');
const db = require('../../database/models/index');
const Op = db.Sequelize.Op;

const adminController ={

    vista:(req, res)=>{
       
              res.render(path.join(__dirname,'../views/admin/administrar.ejs'))
            
          

    },
    search:(req,res)=>{
        db.Producto.findAll({
            include:{
                association:"genero"  
            },
        
            where:{
                    nombre:{[Op.like]:'%' + req.query +'%'}
                    


            }})
         .then(productos =>{
             return res.status(200).json(
                {total:productos.length,
                data: productos,
                status:200});
        })
        
    },
    searchCategoria:(req,res)=>{
        db.Categoria.findAll({
            include:{
                association:"categorias"  
            },
        
            where:{
                    nombre:{[Op.like]:'%' + req.query.keyword +'%'}
                    


            }})
         .then(productos =>{
             return res.status(200).json(
                {total:productos.length,
                data: productos,
                status:200});
        })
        
    }

}
module.exports = adminController;