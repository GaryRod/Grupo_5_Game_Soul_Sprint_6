'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Console extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Console.hasMany(models.Game, {
        foreignKey: 'consoles_id',
        as: "games"
      })
    }
  }
  Console.init({
    name_console: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Console',
  });
  return Console;
};