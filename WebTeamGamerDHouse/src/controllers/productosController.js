//const { dirname } = require('path');
const path = require('path');

const db = require('../../database/models/index');




//controlador
const productosController = {



   crearGenero: (req,res)=>{

        return res.render(path.join(__dirname, '../views/products/formGeneros.ejs'))

    },
    generoCreado: (req,res)=> {
        db.Genero.create({
            nombre: req.body.genero
        });

        res.redirect('/productos/generos');


    },

    listadoGeneros: (req,res)=>{

        db.Genero.findAll()
            .then(generos =>{
                return res.render(path.join(__dirname,'../views/products/generos.ejs'),{generos:generos})
            })
            

    },






    
   
    crearPLataforma: (req, res)=>{

        res.render(path.join(__dirname, '../views/products/formularioPlataforma.ejs')) ;

    },

    plataformaCreado: (req, res)=>{

        db.Plataforma.create({
            nombre: req.body.nombre
        });
        res.redirect('/productos/plataforma');



    },

    plataformasListado:(req,res)=>{
        db.Plataformas.findAll()
            .then(plataformas =>{
                res.render(path.join(__dirname,'../views/products/plataformas.ejs'),{plataformas:plataformas})
            });
        
    

    },
    
    
    
    crear: (req,res)=>{
                return res.render(path.join(__dirname, '../views/products/formProductos.ejs'))
        
    },

    
    
    


    



}











module.exports = productosController;