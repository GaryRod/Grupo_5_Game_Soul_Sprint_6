'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsTo(models.Edition, {
        as: "game",
        foreignKey: "ediciones_id"
      })

      Game.belongsTo(models.Genre, {
      foreignKey: 'genres_id',
      as: "genre"
      });

      Game.belongsTo(models.Console, {
      foreignKey: 'consoles_id',
      as: "consoles"
      });

      Game.hasOne(models.OrderDetail, {
      foreignKey: 'games_Id',
      as: "orderDetails"
      });

      Game.hasMany(models.Image, {
      foreignKey: 'games_Id',
      as: "images"
      });
    }
  }
  Game.init({
    name_game: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    editions_id: DataTypes.INTEGER,
    genres_id: DataTypes.INTEGER,
    consoles_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};