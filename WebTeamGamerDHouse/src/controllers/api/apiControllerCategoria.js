const db= require('../../../database/models/index');

const apiControllerCategoria={

    listar:(req,res)=>{

        db.Categoria.findAll( {
            include:[
                {
                    association : "articulos"},
                 ]
        })
            .then(categorias=>{
                res.status(200).json(
                    {
                        total:categorias.length,
                        
                        data: categorias,
                        status:200
                }
                )
            
            
            
            })

    },

    porid:(req,res)=>{
        db.Categoria.findByPk(req.params.id,
            {
                include:[
                    {
                        association : "articulos"},
                     ]
            })
            .then(categorias=>{
                return res.status(200).json({
                    total:categorias.articulos.length,
                    data:categorias,
                    status:200

                })
            })
    },

    

    

    }



    



module.exports = apiControllerCategoria;