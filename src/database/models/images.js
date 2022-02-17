/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {
      // define association here
      images.belongsTo(models.games);
    }
  }
  images.init({
    img_url: DataTypes.STRING,
    games_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'images',
  });
  return images;
};
*/

module.exports = (sequelize, dataTypes) => {
  let alias = 'Image';
  let cols = {
      id: {
          type: dataTypes.BIGINT(10).UNSIGNED,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      // created_at: dataTypes.TIMESTAMP,
      // updated_at: dataTypes.TIMESTAMP,
      image_url:{
        type: dataTypes.STRING(45),
        allowNull: false
      },
      games_id:{
        type: dataTypes.INTEGER,
        allowNull: false
      }
      
  
  };
  let config = {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: false
  }
  const Image = sequelize.define(alias, cols, config);

  Image.associate = function(models) {
    Image.belonsTo(models.games, {
      foreignKey: 'images_id',
      as: "games"
    });
  }

  return Image
};