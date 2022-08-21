
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
            type:dataTypes.BLOB
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

        Producto.belongsTo(models.Generos,{
            as:"generos",
            foreignKey:"id_genero"

        });

        Producto.belongsTo(models.Plataformas,{
            as:"plataformas",
            foreignKey:"id_plataforma"
    
            });

        Producto.belongsToMany(models.Usuario,{

            as:"Productos",
            through: "usuario_x_producto",
            foreignKey:"id_producto",
            otherKey:"id_usuario",
            timestamps:false

        });


}

    return Producto;
        

}