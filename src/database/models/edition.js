'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Edition.hasMany(models.Game, {
        foreignKey: 'editions_id',
        as: "games"
      });
    }
  }
  Edition.init({
    name_editions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Edition',
  });
  return Edition;
};