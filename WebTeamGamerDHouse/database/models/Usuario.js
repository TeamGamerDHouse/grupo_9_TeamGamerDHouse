
module.exports = (sequelize,dataTypes)=>{

    const alias = "Usuario";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.VARCHAR
        },
        
        apellido:{
            type:dataTypes.VARCHAR
        },
        email:{
            type:dataTypes.DECIMAL
        },
        password:{
            type:dataTypes.LONGBLOB
        },
        imagenusuario:{
            type:dataTypes.LONGBLOB

        },
        id_direccion:{
            type:dataTypes.INTEGER
        }


    };

    const config={
        tableName:"usuario",
        timestamps:false
    }



    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate =(models)=>{

        Usuario.belongsTo(models.Direcion,{
        foreignKey:"id_direccion",
        as:"Usuario"

        });
        Usuario.belongsToMany(models.Producto,{

            as:"usuarios",
            through: "usuario_x_producto",
            foreignKey:"id_usuario",
            otherKey:"id_producto",
            timestamps:false

        });

}



    return Usuario;
        

}