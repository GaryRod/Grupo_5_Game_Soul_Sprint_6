const {body} = require('express-validator');
const path = require('path')
const db = require("../database/models");

const validaciones = [
    body('nombre')
        .notEmpty().withMessage("Debes completar con un nombre"),
    body('tyc')
        .notEmpty().withMessage("Debes aceptar los términos y condiciones"),
    body('fechaNacimiento')
        .notEmpty().withMessage("Debes elegir tu fecha de nacimiento"),
    body('email')
        .notEmpty().withMessage("Debes completar con un email")
        .isEmail().withMessage("Debes ingresar un email válido"),
    body("email", "Email en uso, favor introduzca otra dirección de correo").custom((value) => {
        return db.User
            .findOne({ where: { email: value } })
            .then((usuario) => {
            if (usuario) {
                return Promise.reject();
            }
            })
    }),
    body('password')
        .notEmpty().withMessage("Debes escribir una contraseña")
        .isLength({min: 8}).withMessage("Debes escribir una contraseña de 8 o más caracteres"),
    body('avatar').custom((value, {req})=>{
        let file = req.file
        let acceptedExtensions = ['.jpg', '.png']
        
        if(file){
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)){
            throw new Error ('Las extensiones permitidas son .jpg .png')
            }
        }
        return true;
    })
]

module.exports = validaciones;