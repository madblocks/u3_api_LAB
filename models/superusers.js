'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SuperUser.hasMany(models.Tweets, {
        foreignKey: 'owner_id',
        as: 'tweets',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      SuperUser.hasMany(models.Comments, {
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  SuperUser.init({
    realName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alterEgo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'SuperUser',
    tableName: 'superuser'
  });
  return SuperUser;
};