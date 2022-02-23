'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_game: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      description: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      stock_min: {
        type: Sequelize.INTEGER
      },
      stock_max: {
        type: Sequelize.INTEGER
      },
      editions_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Editions',
          key: 'id'
        }
      },
      genres_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
          key: 'id'
        }
      },
      consoles_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Consoles',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};