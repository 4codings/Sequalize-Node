'use strict';
module.exports = (sequelize, DataTypes) => {
    const WOCategoriesTable = sequelize.define('WOCategories', {
        name: {
            type: DataTypes.STRING(15)
        }
    }, {
        tableName: 'WOCategories',
        freezeTableName: true
    });
    WOCategoriesTable.associate = function(models) {
        // associations can be defined here
        WOCategoriesTable.hasMany(models.WorkOrders, { foreignKey: 'WorkOrdersId' });
    };
    return WOCategoriesTable;
};
