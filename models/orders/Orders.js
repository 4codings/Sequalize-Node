'use strict';
module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        CustOrganizationsId: {
            type: DataTypes.INTEGER(11)
        },
        OrderStatusesId: {
            type: DataTypes.INTEGER(11)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        total: {
            type: DataTypes.DECIMAL(15,2)
        },
    }, {
        tableName: 'Orders',
        freezeTableName: true
    });
    Orders.associate = function(models) {
        // associations can be defined here
        Orders.hasMany(models.OrderItems, { foreignKey: 'OrdersId' });

        Orders.belongsTo(models.CustOrganizations, { foreignKey: 'CustOrganizationsId' });
        Orders.belongsTo(models.OrderStatuses, { foreignKey: 'OrderStatusesId' });

    };
    return Orders;
};
