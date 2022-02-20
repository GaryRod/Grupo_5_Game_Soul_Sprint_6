'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Payment, {
        foreignKey: 'payments_id',
        as: "payments"
      });
      Order.belongsTo(models.Statuse, {
        foreignKey: 'statuses_id',
        as: "statuses"
      });
      Order.belongsTo(models.User, {
        foreignKey: 'users_id',
        as: "users"
      });
      Order.hasMany(models.OrderDetail, {
        foreignKey: 'order_Id',
        as: "orderDetails"
      });
    }
  }
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATE,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    statuses_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};