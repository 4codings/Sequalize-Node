'use strict';
module.exports = (sequelize, DataTypes) => {
  const EIParts = sequelize.define('EIParts', {
    name: DataTypes.STRING
  }, {});
  EIParts.associate = function(models) {
    // associations can be defined here
  };
  return EIParts;
};