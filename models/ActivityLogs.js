'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActivityLogs = sequelize.define('ActivityLogs', {
    action: DataTypes.TEXT,
    description: DataTypes.TEXT,
    object: DataTypes.JSON,
    UsersId: {
      type: DataTypes.INTEGER(11)
    },
  }, {});
  ActivityLogs.associate = function (models) {

    ActivityLogs.belongsTo(models.Users, { foreignKey: 'UsersId' });
  };
  return ActivityLogs;
};
