/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class statuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  }
  statuses.init({
    name_statuses: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'statuses',
  });
  return statuses;
};*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Status';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      name_status:{
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
  const Status = sequelize.define(alias, cols, config);

  Status.associate = function(models) {
    Status.hasOne(models.Order, {
      foreignKey: 'statuses_Id',
      as: "orders"
    });
  }

  return Status
};