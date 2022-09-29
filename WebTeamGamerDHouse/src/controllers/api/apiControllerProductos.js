
const { response } = require('express');
const db= require('../../../database/models/index');
const OP= db.sequelize.Op;

const apiControllerProductos = {

    listarProductos:(req,res)=>{

        db.Productos.findAll()
            .then(productos => {
                 return res.status(200).json({
                    total:productos.length,
                    data: productos,
                    status:200
            })});
    },
    detalleProducto:(req,res)=>{

        db.Productos.findByPk(req.params.id)
            .then(producto=>{
                return res.status(200).json({
                    data:producto,
                    status:200

                })
            })
    }



}

module.exports = apiControllerProductos;
