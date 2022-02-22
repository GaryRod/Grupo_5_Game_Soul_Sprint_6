const {body} = require('express-validator');

const validacionesEditUser = [
    body('editUsernombre')
        .notEmpty().withMessage("Debes completar con un nombre"),
    body('editUseremail')
        .notEmpty().withMessage("Debes completar con un email")
        .isEmail().withMessage("Debe ser de formato e-mail"),
    body('editUsercontra')
        .notEmpty().withMessage("Debes completar con una contraseña"),
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

module.exports = validacionesEditUser;