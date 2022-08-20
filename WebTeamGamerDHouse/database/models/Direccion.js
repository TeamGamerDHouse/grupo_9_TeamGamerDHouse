
module.exports = (sequelize,dataTypes)=>{

    const alias = "Direcion";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        pais:{
            type:dataTypes.VARCHAR
        },
        ciudad:{
            type:dataTypes.VARCHAR
        },
        calle:{
            type:dataTypes.VARCHAR
        },
        numero:{
            type:dataTypes.VARCHAR
        }


    };

    const config={
        tableName:"direccion",
        timestamps:false
    }



    const Direccion = sequelize.define(alias, cols, config);

    Direccion.associate =(models)=>{

        Direccion.hasMany(models.Usuario,{
        foreignKey:"id_direccion",
        as:"Direccion"

    });

}   







    return direccion;
        

}