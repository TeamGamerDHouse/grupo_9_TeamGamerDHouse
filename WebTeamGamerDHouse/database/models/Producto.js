
module.exports = (sequelize,dataTypes)=>{

    const alias = "Productos";

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
        genero:{
            type:dataTypes.STRING
        },
        plataforma:{
            type:dataTypes.STRING
        }
       


    };

    const config={
        tableName:"producto",
        timestamps:false
    }



    const Producto = sequelize.define(alias, cols, config);


    Producto.associate =(models)=>{


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