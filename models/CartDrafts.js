'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartDrafts = sequelize.define('CartDrafts', {
    items: DataTypes.JSON,
    UsersId: {
      type: DataTypes.INTEGER(11)
    },
  }, {});
  CartDrafts.associate = function (models) {

    CartDrafts.belongsTo(models.Users, { foreignKey: 'UsersId' });
  };
  return CartDrafts;
};
