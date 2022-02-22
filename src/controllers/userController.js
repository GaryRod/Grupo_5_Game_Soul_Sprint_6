const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs')
const jsonDB = require('../model/jsonDatabase');
const req = require('express/lib/request');
const usersModel = jsonDB('users');
const db = require("../database/models");

const userController ={
    register: (req, res) => {
        res.render('./users/register')
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    editUser: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((datosDeUsuario) => {
            res.render('./users/editUser', {datosDeUsuario})
        })
    },
    registerProcess: (req, res) => {

        const errores = validationResult(req);
        
        if (errores.errors.length > 0 ) {
            return res.render('./users/register',{
                errors: errores.mapped(),
                oldData: req.body
            })
        }

        // let userInDB = usersModel.findField('email', req.body.email)

        // let userInDB = db.User.findOne({where: {email: req.body.email}})

        /* let userToCreate = {
            ...req.body,
            contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
            isAdmin: String(req.body.email).includes('@gamesoul.com')
            avatar: req.file ? req.file.filename : 'default.png',
        }

        usersModel.create(userToCreate)

        res.redirect('/users/login')
        */

        db.User
            .create({
            first_name: req.body.nombre,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.contraseña, 10),
            avatar: req.file ? req.file.filename : 'default.png',
            type_user: String(req.body.email).includes('@gamesoul.com')
            })
            .then(() => {
                return res.redirect('/users/login');
            })
            .catch(error => console.error(error))
    },
    loginProcess: async (req,res)=>{
        try {
            let userToLogin = await db.User.findOne({where: {email: req.body.email}});

            if (userToLogin) {
                let isOkThePasword = bcryptjs.compareSync(req.body.contraseña, userToLogin.password);

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
                        contraseña: {msg: 'La contraseña no es válida'},
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

        // if(userToLogin){
        //     let isOkThePasword = /* bcryptjs.compareSync(req.body.contraseña, userToLogin.contraseña) */ db.User.findAll({where: {password: req.body.contraseña}});
        //     if(isOkThePasword){
        //         delete userToLogin.contraseña
        //         req.session.userLogged = userToLogin

        //         if(req.body.recuerdame){
        //             res.cookie('userEmail', req.body.email,{maxAge:((1000*60)*60)})
        //         }

        //         return res.redirect('./userProfile')
        //     }
        //     return res.render('./users/login',{
        //         errors: {
        //             contraseña: { msg: 'La contraseña no es válida'},
        //         },
        //         oldData: req.body
        //     })
        // }

        // return res.render('./users/login',{
        //     errors: { 
        //         email: { msg: 'Por favor, ingresá un email válido' },
        //     },
        // })
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
    editUserProcess: async (req, res) => {
        /* const erroresEditUser = validationResult(req);
        
        if (erroresEditUser.errors.length > 0 ) {
            return res.render('./users/editUser',{
                errors: erroresEditUser.mapped(),
                oldData: req.body
            })
        }
        */
       
        try {
            let avatar;

            if (req.file == undefined || null) {
                avatar = req.body.oldAvatar
            } else {
                avatar = req.file.filename
            }

            let usuarioCreado = await db.User.update({
                first_name: req.body.editUsernombre,
                email: req.body.editUseremail,
                password: bcryptjs.hashSync(req.body.editUsercontra, 10),
                avatar: avatar
            }, {
                where: {
                    id: req.params.id
                }
            })

            res.redirect('/users/userProfile')
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController