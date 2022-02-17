/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  }
  payments.init({
    name_payment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payments',
  });
  return payments;
};*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Payment';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      name_payment:{
        type: dataTypes.STRING(45),
        allowNull: false

      }
  
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Payment = sequelize.define(alias, cols, config);

  Payment.associate = function(models) {
    Payment.hasOne(models.Order, {
      foreignKey: 'payments_Id',
      as: "orders"
    });
  }

  return Payment
};