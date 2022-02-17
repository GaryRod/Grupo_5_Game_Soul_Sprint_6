/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consoles extends Model {
    /*
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here
      consoles.hasMany(models.games, {
        foreignKey: 'consoles_id',
        as: "games"
      });
    }
  }
  consoles.init({
    name_console: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'consoles',
  });
  return consoles;
};
*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Console';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      name_console: {
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
  const Console = sequelize.define(alias, cols, config);

  Console.associate = function(models) {
    Console.hasMany(models.games, {
      foreignKey: 'consoles_id',
      as: "games"
    })
      
  }

  return Console
};