const path =require('path')

const { validationResult }= require('express-validator')




const controller = {
    index: (req,res) => {
         res.render(path.join(__dirname,'../views/users/index.ejs'));
    },
    register: (req,res) => {
        res.render(path.join(__dirname, '../views/users/register.ejs'));

    },
    processRegister:( req, res)=>{

        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render(path.join(__dirname, '../views/users/register.ejs'),{

                errors : resultValidation.mapped(),

                oldData : req.body             
            })

        }else{

         return res.redirect('login');
        }

       
        


        

    },

      
    login: (req,res) => {
        res.render(path.join(__dirname, '../views/users/login.ejs'));
    }
    
}


module.exports = controller;