const path =require('path')

const { validationResult }= require('express-validator')

const db= require('../../database/models/index')




const usuarioController = {
    index: (req,res) => {
         res.render(path.join(__dirname,'../views/users/index.ejs'));
    },
    register: (req,res) => {
        res.render(path.join(__dirname, '../views/users/register.ejs'));

    },
    usuarioRegistrado:( req, res)=>{

       /* const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render(path.join(__dirname, '../views/users/register.ejs'),{

                errors : resultValidation.mapped(),
                

                
            })

        }else{
*/

            db.Usuario.create({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.mailusuario,
                contraseña: req.body.password,
                imagenusuario: req.file ? req.file.filename : productImage
                ,
                pais: req.body.pais,
                ciudad: req.body.ciudad,
                calle: req.body.calle,
                numero: req.body.numero
            });

         return res.redirect('login');
       // }

       
    },
    

      
    login: (req,res) => {
        res.render(path.join(__dirname, '../views/users/login.ejs'));
    },

    listadeUsuarios :(req,res)=>{

        db.Usuario.findAll()
            .then(usuarios =>{
                return res.render(path.join(__dirname,'../views/users/listadeusuarios.ejs'),{usuarios:usuarios});
            })
    },
    detalleUsuario: (req,res)=>{
        db.Usuario.findByPk(req.params.id)
            .then(usuario =>{
                res.render(path.join(__dirname,'../views/users/detalleUsuario.ejs'),{usuario:usuario})
            });


    },
    editar:(req,res)=>{

        db.Usuario.findByPk(req.params.id)
            .then(usuario =>{
                res.render(path.join(__dirname, '../views/users/usuarioEdit.ejs'),{usuario:usuario})
            });


    },
    editado:(req,res)=>{

        db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.mailusuario,
            contraseña: req.body.password,
            imagenusuario: req.file ? req.file.filename : productImage
            ,
            pais: req.body.pais,
            ciudad: req.body.ciudad,
            calle: req.body.calle,
            numero: req.body.numero
        },
        {
            where:{
                id: req.params.id
            }
        });

        res.redirect('/usuario/'+ req.params.id);

    },

    eliminar:(req,res)=>{

        db.Usuario.destroy({
            where:{
                id:req.params.id
            }
        });

        res.redirect('/usuarios')
    }
}


module.exports = usuarioController;