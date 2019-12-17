'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrderItems = sequelize.define('OrderItems', {
        OrdersId: {
            type: DataTypes.INTEGER(11)
        },
        qty: {
            type: DataTypes.INTEGER(7)
        },
        total: {
            type: DataTypes.DECIMAL(15,2)
        },
        sourcelocation: {
            type: DataTypes.STRING(15)
        },
        subcategory: {
            type: DataTypes.STRING(15),
        },
        category: {
            type: DataTypes.STRING(15),
        },
        partnumber: {
            type: DataTypes.STRING(15),
        },
        description: {
            type: DataTypes.STRING(50)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        uom: {
            type: DataTypes.STRING(10)
        },
        price: {
            type: DataTypes.DECIMAL(13,2)
        },
        tabxable: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'OrderItems',
        freezeTableName: true
    });
    OrderItems.associate = function(models) {
        OrderItems.belongsTo(models.Orders, { foreignKey: 'OrdersId' });
    };
    return OrderItems;
};
