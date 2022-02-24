const db = require('../database/models')
const {Op} = require('sequelize')
const productController = {
    products: async (req, res) => {
		let productos = await db.Game.findAll({
			include: ["images"]
		})
        res.render('./products/products', {productos})
    },
    productDetails: (req, res) =>{
        db.Game.findByPk(req.params.id, 
			{include:['images', 'genres']})
        .then(producto => {
            res.render('./products/productDetail', {producto})
        })
		.catch(error => res.send(error))
    },
    productCart: (req,res)=>{
        res.render('./products/productCart')
    },
    buyCart: (req, res)=>{
        res.redirect('/users/login')
    },
    createProduct: async (req,res) => {
		let promGenres = await db.Genre.findAll();
        let promEditions = await db.Edition.findAll();
        res.render('./products/createProduct', {promGenres, promEditions})
    },
    store: async (req, res) => {
        let producto = await db.Game.create({
            name_game: req.body.nombre,
			description: req.body.descripcion,
			price: req.body.precio,
			editions_id: req.body.edicion,
			genres_id: req.body.genero
        })
		await db.Image.create({
			img_url: req.file.filename,
			games_id: producto.id
		})
    	res.redirect('/')
    },
    editProduct: (req, res) => {
        db.Game.findByPk(req.params.id)
        .then(productToEdit =>{
            res.render('./products/editProduct', {productToEdit})
        })
		.catch(error => res.send(error))
    },
    update: async (req, res) => {
        let producto = await db.Game.update({
			name_game: req.body.nombre,
			description: req.body.descripcion,
			price: req.body.precio,
			editions_id: req.body.edicion,
			genres_id: req.body.genero,
        },{
            where: {id: req.params.id}
        })
		await db.Image.destroy({
            where: {games_id: req.params.id},
			force: true
        })
		await db.Image.create({
			img_url: req.file.filename,
			games_id: req.params.id
		})
        res.redirect('/')
    },
    destroy: (req, res)=>{
        db.Game.destroy({
            where: {id: req.params.id},
			force: true
        })
        .then(() => {res.redirect('/')})
		.catch(error => res.send(error))
    },
    favoritos: (req, res) => {
        db.Game.findAll({
			include: ['images']
		})
        .then(producto => {
			res.render('./products/favoritos', {favoritos: producto})})
		.catch(error => res.send(error))
    },
	search: async (req, res) => {
		let search = req.query.search;
	
		let productos = await db.Game.findAll({
			where: {
				name_game: { [Op.like]: "%" + search + "%" }
			},
			include: ["images"]
		})
		res.render("products/results", {productos, search});
	}
}

module.exports=productController


