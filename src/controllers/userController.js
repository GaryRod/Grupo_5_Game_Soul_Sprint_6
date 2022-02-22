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
        res.render('./users/editUser')
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
            .catch(error => res.send(error))
    },
    loginProcess: (req,res)=>{
        const errores = validationResult(req);
        
        if (errores.errors.length > 0 ) {
            return res.render('./users/login',{
                errors: errores.mapped(),
            })
        }

        // let userToLogin = usersModel.findField ('email', req.body.email)

        db.User.findOne({where: {email: req.body.email}})
            .then(userToLogin => {
                if(userToLogin){
                    let isOkThePasword = bcryptjs.compareSync(req.body.contraseña, userToLogin.password)
                    if(isOkThePasword){
                        delete userToLogin.password
                        req.session.userLogged = userToLogin 
                        if(req.body.recuerdame){
                            res.cookie('userEmail', userToLogin.email,{maxAge:((1000*60)*60)})
                        }
                        return res.redirect('./userProfile')
                    }
                    return res.render('./users/login',{
                        errors: {
                            password: { msg: 'La contraseña no es válida'},
                        },
                        oldData: req.body
                    })
                }
            })
            .catch(error => res.send(error))

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
        res.render('./users/userProfile', {
            user: req.session.userLogged
        })
    },
    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/')
    },
    editUserProcess: (req, res) => {
        db.User.update({
            first_name: req.body.editUser-nombre,
            email: req.body.editUser-email,
            password: bcryptjs.hashSync(req.body.editUser-contra, 10),
            avatar: req.body.editUser-contra
        }/*,  {
            where: {
                id: req.params.id
            }
        }*/)
        .then((user) => {
            res.render("./users/userProfile", {user});
        })
    }
}

module.exports = userController