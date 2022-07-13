const path = require('path');


const controller = {
    compra: (req,res) => {

        res.render(path.join(__dirname, '../views/compra.ejs'))
    }



}

module.exports = controller;
