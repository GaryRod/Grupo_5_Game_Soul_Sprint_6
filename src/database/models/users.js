/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  }
  users.init({
    first_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    type_users_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      first_name:{
        type: dataTypes.STRING(45),
        allowNull: false
      },
      email:{
        type: dataTypes.STRING(45),
        allowNull: false
      },
      password:{
        type: dataTypes.STRING(45),
        allowNull: false
      },
      avatar:{
        type: dataTypes.STRING(45),
        allowNull: false
      },
      type_users_id:{
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
  const User = sequelize.define(alias, cols, config);

  User.associate = function(models) {
    User.belongsTo(models.type_users_id, {
      foreignKey: 'type_users_id',
      as: "type_users"
    });
    User.hasMany(models.Order, {
      foreignKey: 'users_Id',
      as: "orders"
    });
  }

  return User
};