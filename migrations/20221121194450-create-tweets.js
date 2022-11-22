'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tweets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'owner_id',
        onDelete: 'CASCADE',
        references: {
          model: 'superuser',
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
    await queryInterface.dropTable('tweets');
  }
};