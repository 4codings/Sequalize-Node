'use strict';
module.exports = (sequelize, DataTypes) => {
    const TransferStatusesTable = sequelize.define('TransferStatuses', {
        name: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'TransferStatuses',
        freezeTableName: true
    });
    TransferStatusesTable.associate = function(models) {
        // associations can be defined here
        TransferStatusesTable.hasMany(models.Transfers, { foreignKey: 'TransfersId' });
    };
    return TransferStatusesTable;
};
