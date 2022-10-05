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
    },
    create: async (req,res) =>{        

        const {
            genero,
            plataforma,
            nombre,
            descripcion,
            precio,
            imagen,
            } =req.body;
    
        const newProducto ={
            genero,
            plataforma,
            nombre,
            descripcion,
            precio,
            imagen,
            }
        try {
            await db.Productos.create(newProducto);
            res.status(200).json(newProducto)
            
        } catch (error) {
            console.log(error)
            
        }
    
            
    },

    


}

module.exports = apiControllerProductos;
