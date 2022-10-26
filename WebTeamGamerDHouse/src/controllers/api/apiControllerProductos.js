
const db= require('../../../database/models/index');
const OP= db.sequelize.Op;

const apiControllerProductos = {

    listarProductos:(req,res)=>{

        db.Producto.findAll(
            {
                include:[
                    {
                    association : "categoria"},
                    {
                    association : "genero"    
                    }]
            }
            
               

        )
            // .then(productos => {
            //      return res.status(200).json({
            //         total:productos.length,
            //         data: productos,
            //         status:200
            // })});

            .then(productos=>{
                const productosMap = productos.map(e=>{
                    return{
                        id:e.id,
                        nombre:e.nombre,
                        descripcion:e.descripcion,
                        precio:e.precio,
                        categoria:e.categoria.nombre,
                        genero:e.genero.nombre,
                        imagen:`/image/imagenArticulos/${e.imagen}`
                        
                    }
                })
                return res.status(200).json({
                    total:productos.length,
                    data: productosMap,
                    status:200
                })
            });

    },
    detalleProducto:(req,res)=>{

        db.Producto.findByPk(req.params.id,
            {
                include:[
                    {
                        association : "categoria"},
                        {
                        association : "genero"    
                        }]
            })
            .then(producto=>{
                return res.status(200).json({
                    data:producto,
                    status:200

                })
            })
    },
    create: async (req,res) =>{        

        const {
            genero_id,
            categoria_id,
            nombre,
            descripcion,
            precio,
            imagen ,
            } =req.body;
    
        const newProducto ={
            genero_id,
            categoria_id,
            nombre,
            descripcion,
            precio,
            imagen: req.file ? req.file.filename : productImage,
            }
        try {
            await db.Producto.create(newProducto);
            res.status(200).json(newProducto)
            
        } catch (error) {
            console.log(error)
            
        }
    
            
    },
    ultimo:(req,res)=>{
        db.Producto.findAll({
            
            include:[
                    {
                        association : "categoria"},
                        {
                        association : "genero"    
                        }],
            
            order:[['id','DESC']],
            limit:1
        },
       )
       .then(productos=>{
        const productosMap = productos.map(e=>{
            return{
                id:e.id,
                nombre:e.nombre,
                descripcion:e.descripcion,
                precio:e.precio,
                categoria:e.categoria.nombre,
                genero:e.genero.nombre,
                imagen:`/image/imagenArticulos/${e.imagen}`
                
            }
        })
        return res.status(200).json({
            total : productos.length,
            data: productosMap,
            status:200
        })
    });
        // .then(productos=>{
        //    return res.status(200).json({
        //     total: productos.length,
        //     data: productos,
        //     status:200

        //     })
        // })
    }

    


}

module.exports = apiControllerProductos;
