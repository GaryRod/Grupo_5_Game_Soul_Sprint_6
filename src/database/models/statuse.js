'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statuse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Statuse.hasOne(models.Order, {
        foreignKey: 'statuses_Id',
        as: "orders"
      });
    }
  }
  Statuse.init({
    name_statuses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Statuse',
  });
  return Statuse;
};