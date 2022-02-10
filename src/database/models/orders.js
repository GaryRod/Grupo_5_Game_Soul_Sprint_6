'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    statuses_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};