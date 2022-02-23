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
        foreignKey: 'payment_id',
        as: "payments"
      });
      Order.belongsTo(models.Status, {
        foreignKey: 'status_id',
        as: "statuses"
      });
      Order.belongsTo(models.User, {
        foreignKey: 'user_id',
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
    payment_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};