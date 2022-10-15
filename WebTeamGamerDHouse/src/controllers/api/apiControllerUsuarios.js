const path =require('path');
const { validationResult }= require('express-validator');
const bcryptjs =require('bcryptjs');
const db= require('../../../database/models/index');
//const OP= db.sequelize.Op;

const apiControllerUsuarios ={

    listadeUsuarios :(req,res)=>{

        db.Usuario.findAll()
        .then(usuarios => {
            return res.status(200).json({
                total:usuarios.length,
                data: usuarios,
                status:200
            })})
        
           
    },

    // usuario por ID (byPK)

    detalleUsuario: (req,res)=>{
        db.Usuario.findByPk(req.params.id,{
            
        })
        .then(usuario => {
            return res.status(200).json({
                data:usuario,
                status:200
            })})
        
              
            }

    
    }



module.exports = apiControllerUsuarios