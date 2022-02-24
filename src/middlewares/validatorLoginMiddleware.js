const {body} = require('express-validator');
const validaciones = [
    body('email')
        .notEmpty().withMessage("Debes escribir un email"),
    body('password')
        .notEmpty().withMessage("Debes escribir una contraseña")
]

module.exports = validaciones;