'use strict';
module.exports = (sequelize, DataTypes) => {
    const TransferItemTable = sequelize.define('TransferItems', {
        TransfersId: {
            type: DataTypes.INTEGER(11),
            references: {
                model: 'Transfers',
                key: 'id'
            }
        },
        qty: {
            type: DataTypes.INTEGER(5)
        },
        partssubcategory: {
            type: DataTypes.STRING(50)
        },
        partscategory: {
            type: DataTypes.STRING(50)
        },
        partnumber: {
            type: DataTypes.STRING(10),
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
    }, {
        tableName: 'TransferItems',
        freezeTableName: true
    });
    TransferItemTable.associate = function(models) {
        TransferItemTable.belongsTo(models.Transfers, { foreignKey: 'TransfersId' });
    };
    return TransferItemTable;
};
