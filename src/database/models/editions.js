/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class editions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here

      editions.belongsTo(models.games, {
        foreignKey: 'editions_id',
        as: "games"
      });
    }
  }
  editions.init({
    name_editions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'editions',
  });
  return editions;
};
*/
module.exports = (sequelize, dataTypes) => {
  let alias = 'Edition';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      name_edition:{
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
  const Edition = sequelize.define(alias, cols, config);

  Edition.associate = function(models) {
    Edition.belongsTo(models.games, {
      foreignKey: 'editions_id',
      as: "games"
    });
  }

  return Edition
};