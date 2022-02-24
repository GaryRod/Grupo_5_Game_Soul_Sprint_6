const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs')
const db = require("../database/models");

const userController ={
    register: (req, res) => {
        res.render('./users/register')
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    registerProcess: (req, res) => {
        const errores = validationResult(req);
        
        if (errores.errors.length > 0 ) {
            return res.render('./users/register',{
                errors: errores.mapped(),
                oldData: req.body
            })
        }
        db.User.create({
            first_name: req.body.nombre,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file ? req.file.filename : 'default.png',
            type_user: String(req.body.email).includes('@gamesoul.com')
            })
            .then(() => {
                return res.redirect('/users/login');
            })
            .catch(error => res.send(error))
    },
    loginProcess: async (req, res) => {
        try {
            const errores = validationResult(req);
            
            if (errores.errors.length > 0 ) {
                return res.render('./users/login',{
                    errors: errores.mapped(),
                    oldData: req.body
                })
            }

            let userToLogin = await db.User.findOne({where: {email: req.body.email}});
            
            if (userToLogin) {
                let isOkThePasword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                
                if (isOkThePasword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    
                    if (req.body.recuerdame) {
                        res.cookie('userEmail', req.body.email,{maxAge:((1000*60)*60)})
                    }
                    return res.redirect('./userProfile');
                }
                return res.render('./users/login', {
                    errors: {
                        password: {msg: 'La contraseña no es válida'},
                    },
                    oldData: req.body
                })
            }
            return res.render('./users/login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos'
                    }
                }
            })
        }
        catch(error) {
            console.log(error);
        }
    },
    profile: (req,res) => {
        db.User.findByPk(req.session.userLogged.id)
        .then((user) => {
            res.render('./users/userProfile', {user})
        })
    },
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    },
    editUser: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((datosDeUsuario) => {
            res.render('./users/editUser', {datosDeUsuario})
        })
    },
    editUserProcess: async (req, res) => {
        try {
            let datosDeUsuario = await db.User.findByPk(req.params.id)

            const errores = validationResult(req);
            
            if (errores.errors.length > 0 ) {
                return res.render('./users/editUser',{
                    errors: errores.mapped(),
                    oldData: req.body,
                    datosDeUsuario
                })
            }

            await db.User.update({
                first_name: req.body.editUsernombre,
                email: req.body.editUseremail,
                password: bcryptjs.hashSync(req.body.editUsercontra, 10),
                avatar: req.file ? req.file.filename : req.body.oldAvatar,
            }, {
                where: {
                    id: req.params.id
                }
            })

            let nuevosDatos = await db.User.findByPk(req.params.id)
            delete nuevosDatos.password;
            req.session.userLogged = nuevosDatos;

            res.redirect('/users/userProfile')
        } 
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController