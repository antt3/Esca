'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Post', { 
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  User.associate = function(models) {
    // associations can be defined here
  };

  return Post;
};