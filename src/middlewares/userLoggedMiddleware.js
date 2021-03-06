const db = require('../database/models');
const {Op} = require('sequelize')

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false

    let emailInCookie = req.cookies.userEmail
    let userFromCookie = await db.User.findOne({
        where: {
            email: {[Op.like]: emailInCookie}
        }
    })

    if(userFromCookie){
        req.session.userLogged = userFromCookie
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
        // console.log(res.locals.userLogged);
        // 1645714386022
    }

    next()
}

module.exports = userLoggedMiddleware
