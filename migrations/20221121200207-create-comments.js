'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
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
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'owner_id',
        onDelete: 'CASCADE',
        references: {
          model: 'superusers',
          key: 'id'
        }
      },
      tweetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'twert_id',
        onDelete: 'CASCADE',
        references: {
          model: 'tweets',
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
    await queryInterface.dropTable('Comments');
  }
};