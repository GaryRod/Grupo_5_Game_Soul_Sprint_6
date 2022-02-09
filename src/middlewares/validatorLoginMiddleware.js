const {body} = require('express-validator');
const validaciones = [
    body('email')
        .notEmpty().withMessage("Debes escribir un un email"),
    body('contraseña')
        .notEmpty().withMessage("Debes escribir una contraseña")
]

module.exports = validaciones;