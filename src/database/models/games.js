'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  games.init({
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
    modelName: 'games',
  });
  return games;
};