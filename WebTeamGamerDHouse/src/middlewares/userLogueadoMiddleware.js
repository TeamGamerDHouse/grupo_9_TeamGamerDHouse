function userLogueadoMiddleware(req, res , next) {

    res.locals.logueado = false;

    if(req.session && req.session.usuarioLogueado){

        res.locals.logueado =true;
        
        res.locals.logueado = req.session.usuarioLogueado;

    }



    next();
}


module.exports = userLogueadoMiddleware;