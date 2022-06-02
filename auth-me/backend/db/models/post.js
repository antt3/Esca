'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Post', { 
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    }
  });

  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'userId'});
    Post.hasMany(models.Comment, { foreignkey: 'recipeId', onDelete: 'CASCADE', hooks: true });
  };

  return Post;
};