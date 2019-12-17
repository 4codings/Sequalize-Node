'use strict';
module.exports = (sequelize, DataTypes) => {
    const WOPrioritiesTable = sequelize.define('WOPriorities', {
        name: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'WOPriorities',
        freezeTableName: true
    });
    WOPrioritiesTable.associate = function(models) {
        // associations can be defined here
        WOPrioritiesTable.hasMany(models.WorkOrders, { foreignKey: 'WorkOrdersId' });
    };
    return WOPrioritiesTable;
};
