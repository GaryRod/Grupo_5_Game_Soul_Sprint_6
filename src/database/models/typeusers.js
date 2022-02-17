/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class typeUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  }
  typeUsers.init({
    type_user: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'typeUsers',
  });
  return typeUsers;
};*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Typeuser';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      type_user:{
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
  const Typeuser = sequelize.define(alias, cols, config);

  Typeuser.associate = function(models) {
    Typeuser.hasMany(models.User, {
      foreignKey: 'type_user_Id',
      as: "users"
    });
  }

  return Typeuser
};