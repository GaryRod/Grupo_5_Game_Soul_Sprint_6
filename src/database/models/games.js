/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
      /*
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.

    static associate(models) {
      // define association here

      games.belongsTo(models.editions, {
        foreignKey: 'editions_id',
        as: "edition"
      });

      games.belongsTo(models.genres, {
        foreignKey: 'senres_id',
        as: "genre"
      });

      games.belongsTo(models.consoles, {
        foreignKey: 'consoles_id',
        as: "console"
      });

      games.hasOne(models.orderDetails, {
        foreignKey: 'games_Id',
        as: "orderDetails"
      });

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
};*/



module.exports = (sequelize, dataTypes) => {
  let alias = 'Game';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      name_game: {
          type: dataTypes.STRING(45),
          allowNull: false
      },
      price: {
          type: dataTypes.DECIMAL,
          allowNull: false
      },
      descripcion: {
          type: dataTypes.STRING(400),
          allowNull: false
      },
      stock: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      stock_min: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      stock_max: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      ediciones_id: {
      type: dataTypes.INTEGER,
      allowNull: false
      },
      genres_id: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
      consoles_id: {
        type: dataTypes.INTEGER,
        allowNull: false
      },
  
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Game = sequelize.define(alias, cols, config);

  Game.associate = function(models) {
      Game.belonsTo(models.ediciones, { // models.Movies -> Movie es el valor de alias en movie.js
          as: "game", // El nombre del modelo pero en plural
          foreignKey: "ediciones_id"
      })
      Game.belongsTo(models.genres, {
        foreignKey: 'senres_id',
        as: "genre"
      });

      Game.belongsTo(models.consoles, {
        foreignKey: 'consoles_id',
        as: "console"
      });

      Game.hasOne(models.orderDetails, {
        foreignKey: 'games_Id',
        as: "orderDetails"
      });
  }

  return Game
};