const path = require('path');
const db = require('../../database/models/index');




//controlador
const generosController = {



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
}


module.exports = generosController
