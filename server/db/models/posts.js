'use strict';
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  posts.associate = function (models) {
    // associations can be defined here
  };
  return posts;
};