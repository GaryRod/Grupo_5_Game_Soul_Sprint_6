/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here

       // belongsTo
       orderDetails.belongsTo(models.games);

       // belongsTo
       orderDetails.belongsTo(models.order);
    }
  }
  orderDetails.init({
    quantity: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    orders_id: DataTypes.INTEGER,
    games_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderDetails',
  });
  return orderDetails;
};*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'OrderDetail';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      quantity:{
        type: dataTypes.DECIMAL,
        allowNull:false
      },
      subtotal:{
        type: dataTypes.DECIMAL,
        allowNull:false
      },
      orders_id:{
        type: dataTypes.INTEGER,
        allowNull:false
      },
      games_id:{
        type: dataTypes.DECIMAL,
        allowNull:false
      },
      
  
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const OrderDetail = sequelize.define(alias, cols, config);

  OrderDetail.associate = function(models) {
    OrderDetail.belongsTo(models.Product);

    OrderDetail.belongsTo(models.Order);
  }

  return OrderDetail
};