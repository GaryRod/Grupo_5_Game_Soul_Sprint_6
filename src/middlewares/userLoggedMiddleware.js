const jsonDB = require('../model/jsonDatabase');
const usersModel = jsonDB('users');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false

    let emailInCookie = req.cookies.userEmail
    let userFromCookie = usersModel.findField('email', emailInCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    next()
}

module.exports = userLoggedMiddleware
