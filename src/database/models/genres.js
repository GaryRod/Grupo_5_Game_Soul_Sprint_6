/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here
      genres.hasMany(models.games, {
        foreignKey: 'genres_id',
        as: "games"
      });
    }
  }
  genres.init({
    name_genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'genres',
  });
  return genres;
};
*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Genre';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      name_genre:{
        type: dataTypes.STRING(45),
        allowNull: false
      }
      
  
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = function(models) {
    Genre.hasMany(models.games, {
      foreignKey: 'genres_id',
      as: "games"
    });
  }

  return Genre
};