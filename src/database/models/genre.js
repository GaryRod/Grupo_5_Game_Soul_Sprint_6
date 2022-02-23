'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Genre.hasMany(models.Game, {
        foreignKey: 'genre_id',
        as: "games"
      });
    }
  }
  Genre.init({
    name_genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};