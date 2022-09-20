
module.exports = (sequelize,dataTypes)=>{

    const alias = "UsuarioProducto";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        id_usuario:{
            type:dataTypes.INTEGER
        },
        
        id_producto:{
            type:dataTypes.INTEGER
        },
        fecha:{
            type:dataTypes.DATE
        },
        cantidad:{
            type:dataTypes.INTEGER
        }
       

    };

    const config={
        tableName:"usuarioXproducto",
        timestamps:false
    }



    const UsuarioProducto = sequelize.define(alias, cols, config);

    return UsuarioProducto;
        

}
