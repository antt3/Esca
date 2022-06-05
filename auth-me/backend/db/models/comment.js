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
    },
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    PostId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    }
  });

  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Post, { foreignKey: 'PostId' });
  };

  return Comment;
};