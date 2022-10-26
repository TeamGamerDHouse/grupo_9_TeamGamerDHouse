

function autoriza(req,res,next){

    !req.session.usuarioLogueado?  res.redirect('/'):next();

}

module.exports = autoriza