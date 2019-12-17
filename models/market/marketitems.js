'use strict';
module.exports = (sequelize, DataTypes) => {
  const EquipmentInspections = sequelize.define('MarketItems', {
    date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    sold: DataTypes.INTEGER,
    UsersId: DataTypes.INTEGER,
  }, {});
  EquipmentInspections.associate = function(models) {
    // associations can be defined here
  };
  return EquipmentInspections;
};