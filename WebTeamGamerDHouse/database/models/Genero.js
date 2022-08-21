
module.exports = (sequelize,dataTypes)=>{

    const alias = "Generos";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.STRING
        }
       


    };

    const config={
        tableName:"genero",
        timestamps:false
    }



    const Genero = sequelize.define(alias, cols, config);

    Genero.associate =(models)=>{

    Genero.hasMany(models.Productos,{
        as: "productos",
        foreignKey:"id_genero"

    });

    
}

    return Genero;
        

}