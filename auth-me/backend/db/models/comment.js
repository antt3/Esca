'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', { 
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    }
  });

  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Post, { foreignKey: "postId" });
  };

  return Comment;
};