'use strict';
module.exports = (sequelize, DataTypes) => {
    const WOStatusesTable = sequelize.define('WOStatuses', {
        name: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'WOStatuses',
        freezeTableName: true
    });
    WOStatusesTable.associate = function(models) {
        // associations can be defined here
        WOStatusesTable.hasMany(models.WorkOrders, { foreignKey: 'WorkOrdersId' });
    };
    return WOStatusesTable;
};
