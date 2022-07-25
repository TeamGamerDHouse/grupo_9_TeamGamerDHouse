
const path =require('path')

const controller = {
    index: (req,res) => {
         res.render(path.join(__dirname,'../views/users/index.ejs'));
    },
    register: (req,res) => {
        res.render(path.join(__dirname, '../views/users/register.ejs'));
    },
    login: (req,res) => {
        res.render(path.join(__dirname, '../views/users/login.ejs'));
    }
  
}


module.exports = controller;