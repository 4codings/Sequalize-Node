'use strict';
module.exports = (sequelize, DataTypes) => {
    const TransfersTable = sequelize.define('Transfers', {
        CustOrganizationsId: {
            type: DataTypes.INTEGER(11)
        },
        TransferStatusesId: {
            type: DataTypes.INTEGER(11)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        destination: {
            type: DataTypes.STRING(100)
        },
        source: {
            type: DataTypes.STRING(100)
        },
    }, {
        tableName: 'Transfers',
        freezeTableName: true
    });
    TransfersTable.associate = function(models) {
        // associations can be defined here
        TransfersTable.hasMany(models.TransferItems, { foreignKey: 'TransferItemsId' });

        TransfersTable.belongsTo(models.CustOrganizations, { foreignKey: 'CustOrganizationsId' });
        TransfersTable.belongsTo(models.TransferStatuses, { foreignKey: 'TransferStatusesId' });

    };
    return TransfersTable;
};
