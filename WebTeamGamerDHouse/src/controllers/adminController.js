const path = require('path');

const db = require('../../database/models/index')

const adminController ={

    vista:(req, res)=>{
        db.Producto.findAll()
          .then(productos=> {
              
              res.render(path.join(__dirname,'../views/admin/administrar.ejs'),{productos})
            
          });



    }
}

module.exports = adminController;