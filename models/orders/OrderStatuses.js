'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderStatuses = sequelize.define('OrderStatuses', {
        name: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'OrderStatuses',
        freezeTableName: true
    });
    OrderStatuses.associate = function(models) {
        // associations can be defined here
        OrderStatuses.hasMany(models.Orders, { foreignKey: 'OrderStatusesId' });
    };
    return OrderStatuses;
};
