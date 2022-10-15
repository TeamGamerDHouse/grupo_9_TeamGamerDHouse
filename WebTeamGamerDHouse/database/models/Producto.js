
module.exports = (sequelize,dataTypes)=>{

    const alias = "Producto";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.STRING
        },
        
        descripcion:{
            type:dataTypes.STRING
        },
        precio:{
            type:dataTypes.STRING
        },
        imagen:{
            type:dataTypes.STRING
        },
        genero_id:{
            type:dataTypes.INTEGER
        },
        categoria_id:{
            type:dataTypes.INTEGER
        }
       


    };

    const config={
        tableName:"producto",
        timestamps:false
    }



    const Producto = sequelize.define(alias, cols, config);


    Producto.associate =(models)=>{

        Producto.belongsTo(models.Genero,{
            as:"genero",
            foreignKey:"genero_id"

        });

        Producto.belongsTo(models.Categoria,{
            as:"categoria",
            foreignKey:"categoria_id"
    
            });


        Producto.belongsToMany(models.Usuario,{

            as:"Productos",
            through: "usuarioXproducto",
            foreignKey:"id_producto",
            otherKey:"id_usuario",
            timestamps:false

        });


}

    return Producto;
        

}