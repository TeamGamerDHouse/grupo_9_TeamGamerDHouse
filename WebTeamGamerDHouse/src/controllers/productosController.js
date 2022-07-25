const path = require('path')
const fs = require ('fs')
const jsonPath = path.join(__dirname, '../database/products.json');



const json = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));


const allProducts = json.map( e => {
    return {
        id: e.id,
        categoria: e.categoria,
        nombreProducto: e.nombreProducto,
        descripcion: e.descripcion,
        precio: e.precio,
        descuento: e.descuento,
        imagen:e.imagen
        


    }
});



const controller = {

    allProducts: (req,res) => {

        res.render(path.join(__dirname,'../views/products/productos.ejs'),{ allProducts } );
    },

    createProductos: (req,res)=> {

        res.render(path.join(__dirname,'../views/products/formProductos.ejs'));

    },


    createProducts: (req,res)=>{

        const newCategoria = req.body.categoria;
        const newNombreProducto= req.body.nombreProducto;
        const newDescripcion = req.body.descripcion;
        const newPrecio = req.body.precio;
        const newImagen =req.file ? req.file.filename : "";

        const id = allProducts[allProducts.length -1].id;
        const newId = id + 1;

        const obj ={

            id:newId,
            categoria:newCategoria,
            nombreProducto:newNombreProducto,
            descripcion:newDescripcion,
            precio:newPrecio,
            
            imagen: newImagen

        }
        allProducts.push(obj);
        fs.writeFile(jsonPath, JSON.stringify(allProducts), (error)=>{
            if(error){
                res.send(error);
            }else{
                res.redirect('/productos');

            }
        })

    },
    productsId: (req,res)=>{
        const {id} =req.params;

        const product =allProducts.find((e)=>e.id ===parseInt(id));
        
        if(product){

            res.render(path.join(__dirname,'../views/products/detalleProductos.ejs'),{'product': product  } );
        }else{
            res.send(400)
        }





    },




}











module.exports = controller;