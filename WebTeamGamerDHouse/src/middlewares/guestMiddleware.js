function guestMiddleware(req, res, next){

    if (req.session.usuarioConectado){
        return res.redirect('/');
    }
    next();
};

module.exports = guestMiddleware;
