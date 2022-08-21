
module.exports = (sequelize,dataTypes)=>{

    const alias = "Plataformas";

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
        tableName:"plataforma",
        timestamps:false
    }



    const Plataforma = sequelize.define(alias, cols, config);

    Plataforma.associate = (models)=>{

        Plataforma.hasMany(models.Plataformas,{
            foreignKey:"id_plataforma",
            as:"Plataforma"
    
            });
    }

    return Plataforma;
        

}