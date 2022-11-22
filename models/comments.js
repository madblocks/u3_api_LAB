'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(models.SuperUser, {
        foreignKey: 'owner_id',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Comments.belongsTo(models.Tweets, {
        foreignKey: 'tweet_id',
        as: 'comments',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Comments.init({
    content: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    tweetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments'
  });
  return Comments;
};