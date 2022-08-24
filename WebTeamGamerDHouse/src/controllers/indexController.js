const path= require('path');

const indexController ={

    vista: (req, res)=>{

        res.render(path.join(__dirname, '../views/users/index.ejs'));
    }
}

module.exports = indexController;