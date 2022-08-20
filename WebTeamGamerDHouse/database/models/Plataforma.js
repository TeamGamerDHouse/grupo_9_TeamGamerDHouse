
module.exports = (sequelize,dataTypes)=>{

    const alias = "Plataforma";

    const cols={

        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true
            
        },
        nombre:{
            type:dataTypes.VARCHAR
        }
       


    };

    const config={
        tableName:"plataforma",
        timestamps:false
    }



    const Plataforma = sequelize.define(alias, cols, config);

    return Plataforma;
        

}