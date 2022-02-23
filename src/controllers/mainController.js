const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products');
const db = require('../database/models')
const {Op} = require('sequelize')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: async (req, res) => {
        let recomendados = productModel.buscado('recomendados');
        let game = await db.Game.findAll({
            where: {
                genres_id: 1
            },
            include: ['images']
        })
        let game2 = await db.Game.findAll({
            where: {
                genres_id: 5
            },
            include: ['images']
        })
        
        res.render('./index', {game, game2, recomendados})
    },
    support: (req, res) => {
        res.render('./support')
    }
}

module.exports = mainController