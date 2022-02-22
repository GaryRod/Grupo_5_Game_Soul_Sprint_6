const {body} = require('express-validator');
const path = require('path')
const db = require("../database/models");

const validaciones = [
    body('editUsernombre')
        .notEmpty().withMessage("Debes completar con un nombre"),
    body('editUseremail')
        .notEmpty().withMessage("Debes completar con un email")
        .isEmail().withMessage("Debes ingresar un email válido"),
    body("editUseremail", "Email en uso, favor introduzca otra dirección de correo").custom((value) => {
        return db.User
            .findOne({ where: { email: value } })
            .then((usuario) => {
            if (usuario) {
                return Promise.reject();
            }
            })
    }),
    body('editUsercontra')
        .notEmpty().withMessage("Debes escribir una contraseña")
        .isLength({min: 8}).withMessage("Debes escribir una contraseña de 8 o más caracteres"),
    body('editUserfoto').custom((value, {req})=>{
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