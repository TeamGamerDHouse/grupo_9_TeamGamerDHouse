
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
            type:dataTypes.DECIMAL
        }
       

    };

    const config={
        tableName:"usuario_x_producto",
        timestamps:false
    }



    const UsuarioProducto = sequelize.define(alias, cols, config);

    return UsuarioProducto;
        

}
