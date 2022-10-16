const path= require('path');
const db = require('../../database/models/index');

const indexController ={

    vista: (req, res)=>{

       db.Producto.findAll({
        include:[{
          association: "categoria"

        }]
       })
          .then(productos=> {
              
            return res.render(path.join(__dirname, '../views/users/index.ejs'),{ productos:productos })
          });
        
    

    
}
}

module.exports = indexController;