/*'use strict';
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
    /*static associate(models) {
      // define association here

       
       orders.belongsTo(models.statuses);
       
       orders.belongsTo(models.Payments);
       
       orders.belongsTo(models.Users);

       orders.hasMany(models.orderDetails, {
        foreignKey: 'orders_Id',
        as: "orderDetails"
      });
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
};*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Order';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      number:{
        type: dataTypes.INTEGER(45),
        allowNull: false
      },
      date:{
        type: dataTypes.DATE,
        allowNull:false
      },
      total:{
        type: dataTypes.DECIMAL,
        allowNull:false
      },
      payments_id:{
        type: dataTypes.INTEGER(45),
        allowNull:false
      },
      statuses_id:{
        type: dataTypes.INTEGER(45),
        allowNull:false
      },
      users_id:{
        type: dataTypes.INTEGER(45),
        allowNull:false
      },
      
      
      
  
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Order = sequelize.define(alias, cols, config);

  Order.associate = function(models) {
    Order.belongsTo(models.payments, {
      foreignKey: 'payments_id',
      as: "payments"
    });
    Order.belongsTo(models.statuses, {
      foreignKey: 'statuses_id',
      as: "statuses"
    });
    Order.belongsTo(models.users, {
      foreignKey: 'users_id',
      as: "users"
    });


    Order.hasMany(models.Orderdetail, {
      foreignKey: 'order_Id',
      as: "orderdetails"
    });
  }

  return Order
};