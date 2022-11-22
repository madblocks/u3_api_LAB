'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tweets.belongsTo(models.SuperUser, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Tweets.hasMany(models.Comments, {
        foreignKey: 'tweet_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Tweets.init({
    content: DataTypes.TEXT,
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'owner_id',
      onDelete: 'CASCADE',
      references: {
        model: 'superuser',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Tweets',
    tableName: 'tweets'
  });
  return Tweets;
};