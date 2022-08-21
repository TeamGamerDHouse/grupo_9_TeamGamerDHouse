
module.exports = (sequelize,dataTypes)=>{

    const alias = "Direccion";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
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







    return Direccion;
        

}