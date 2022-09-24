const path= require('path');
const db = require('../../database/models/index');

const indexController ={

    vista: async (req, res)=>{

       const base = await db.Productos.findAll()
          .then(productos=> {
              
              res.redirect(('/'),{productos});
          });
        
    

    
}
}

module.exports = indexController;