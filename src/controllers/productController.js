/*const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products');
const db = require("../database/models");
const { Op, Association } = require("sequelize");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productController = {
    products: (req, res) => {
		let producto = productModel.all();
        res.render('./products/products', {producto})
    },
    productDetail: (req, res) => {
		let producto = productModel.find(req.params.id)
		res.render('./products/productDetail', {producto})
    },
	productCart: (req,res) => {
		res.render('./products/productCart')
	},
	buyCart: (req, res) => {
		// if (locals.IsLogged) {
		// 	console.log('gracias por tu compra');
		// 	res.redirect('/nada')
		// }
		res.redirect('/users/login')
	},
	createProduct: (req, res) => {
		res.render('./products/createProduct')
	},
    store: (req, res) => {
		let grupo = req.body
		grupo.imagen = req.file.filename
		let nuevoJuego = {
			nombre : req.body.nombre,
			descripcion : req.body.descripcion,
			precio : req.body.precio,
			edicion : req.body.edicion,      
			img: grupo.imagen,
			genero: req.body.genero,
			categoria : req.body.categoria
		}
		productModel.create(nuevoJuego)
		res.redirect('./')
	},
	editProduct: (req, res) => {
		let productToEdit = productModel.find(req.params.id)
		res.render('./products/editProduct', {productToEdit})
	},
    update: (req, res) => {
		let productToUpdate = productModel.find(req.params.id)
		let grupo = req.body
		grupo.imagen = req.file.filename
		let objetoAct ={
			id : productToUpdate.id,
			nombre : req.body.nombre,
			descripcion : req.body.descripcion,
			precio : req.body.precio,
			edicion : req.body.edicion,
			img: grupo.imagen,
			genero: req.body.genero,
			categoria : req.body.categoria
        }
		productModel.update(objetoAct)
		res.redirect('/')
	},
    destroy: (req, res) => {
		productModel.delete(req.params.id)
		res.redirect('/')	
	},
	favoritos: (req,res)=>{
		let producto = productModel.all();
		res.render('./products/favoritos', {favoritos: producto})
	},
	search: async (req, res) => {
		let search = req.query.search;
	
		let productos = await db.Game.findAll({
			where: {
				name_game: { [Op.like]: "%" + search + "%" }
			},
			include: ["images"]
		})

		return res.render("products/results", { productos, search });
	},
}

module.exports = productController*/

const db = require('../database/models')
const {Op} = require('sequelize')
const productController = {

    products: (req,res) =>{
        db.Game.findAll( {include:[
			{ association: 'images'}
		]})
        .then( producto=>{
            res.render('./products/products', {producto})
        })
    },
    productDetails : (req,res) =>{
        db.Game.findByPk(req.params.id, {include:[
        { association: 'images'}, { association: 'genres'}
    ]})
        .then( producto =>{
            res.render('./products/productDetail', {producto})
        })
    },
    productCart: (req,res)=>{
        res.render('./products/productCart')
    },
    buyCart: (req,res)=>{
        res.redirect('/users/login')
    },
    createProduct: (req,res)=>{
		db.Game.findAll({include:[
			{ association: 'images'}, { association: 'genres'}
		]})
		.then
        (producto => res.render('./products/createProduct', {producto}))
    },
    store: (req,res)=>{
        db.Game.create({
            name_game : req.body.nombre,
			description : req.body.descripcion,
			price : req.body.precio,
			editions : req.body.edicion,      
			img_url:  req.file.filename,
			genres_id: req.body.genero
        },{include:[
			{ association: 'images'}, { association: 'genres'}
		]})
        .then(()=>{
            res.redirect('/')
        })
    },
    editProduct: (req,res)=>{
        db.Game.findByPk(req.params.id)
            .then(productToEdit =>{
                res.render('./products/editProduct', {productToEdit})
            })
    },
    update: (req,res)=>{
        db.Game.update({
			name_game : req.body.nombre,
			description : req.body.descripcion,
			price : req.body.precio,
			ediciones: req.body.edicion,      
			img: req.body.imagen,
			genres: req.body.genero,
        },{
            where: {id: req.params.id}
        },{include:[
			{ association: 'images'}, { association: 'genres'}
		]})
        .then(()=>{
            res.redirect('/')
        })        
    },
    destroy: (req,res)=>{
        db.Game.destroy({
            where: {id: req.params.id}
        })
        .then(()=>{
            res.redirect('/')
        })
    },
    favoritos: (req,res)=>{
        db.Game.findAll()
        .then(producto =>{
            res.render('./products/favoritos', {favoritos: producto})
        })
    },
	search: async (req, res) => {
		let search = req.query.search;
	
		let productos = await db.Game.findAll({
			where: {
				name_game: { [Op.like]: "%" + search + "%" }
			},
			include: ["images"]
		})

		return res.render("products/results", { productos, search });
	},

}

module.exports=productController


