'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetail.belongsTo(models.Game, {
        foreignKey: 'games_id',
        as: 'games'
      });

      OrderDetail.belongsTo(models.Order, {
        foreignKey: 'orders_id',
        as: 'orders'
      });
    }
  }
  OrderDetail.init({
    quantity: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    orders_id: DataTypes.INTEGER,
    games_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};