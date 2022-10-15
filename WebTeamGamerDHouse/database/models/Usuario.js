
module.exports = (sequelize,dataTypes)=>{

    const alias = "Usuario";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.STRING
        },
        
        apellido:{
            type:dataTypes.STRING
        },
        email:{
            type:dataTypes.STRING
        },
        contraseña:{
            type:dataTypes.STRING
        },
        imagenusuario:{
            type:dataTypes.STRING

        },
        pais:{
            type: dataTypes.STRING
        },
        ciudad:{
            type:dataTypes.STRING
        },
        calle:{
            type:dataTypes.STRING
        },
        numero:{
            type:dataTypes.STRING
        },
        rol: {
            type:dataTypes.INTEGER
        }

    };

    const config={
        tableName:"usuario",
        timestamps:false
    }



    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate =(models)=>{

       
        Usuario.belongsToMany(models.Producto,{

            as:"usuarios",
            through: "usuarioXproducto",
            foreignKey:"id_usuario",
            otherKey:"id_producto",
            timestamps:false

        });

}



    return Usuario;
        

}