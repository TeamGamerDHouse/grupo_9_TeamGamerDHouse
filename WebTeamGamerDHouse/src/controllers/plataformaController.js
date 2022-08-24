const path = require('path');
const db = require('../../database/models/index');




const plataformaController ={

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
    
    


};

module.exports= plataformaController;