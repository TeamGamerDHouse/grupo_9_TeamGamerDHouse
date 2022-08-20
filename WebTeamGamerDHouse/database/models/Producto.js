
module.exports = (sequelize,dataTypes)=>{

    const alias = "Producto";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.VARCHAR
        },
        
        descripcion:{
            type:dataTypes.VARCHAR
        },
        precio:{
            type:dataTypes.DECIMAL
        },
        imagen:{
            type:dataTypes.LONGBLOB
        },
        id_genero:{
            type:dataTypes.INTEGER
        },
        id_plataforma:{
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
        foreignKey:"id_genero",
        as:"Producto"

        });

        Producto.belongsTo(models.Plataforma,{
            foreignKey:"id_plataforma",
            as:"Producto"
    
            });

        Producto.belongsToMany(models.Usuario,{

            as:"usuarios",
            through: "usuario_x_producto",
            foreignKey:"id_producto",
            otherKey:"id_usuario",
            timestamps:false

        });


}

    return Producto;
        

}