'use strict';
module.exports = (sequelize, DataTypes) => {
    const LocationPartQties = sequelize.define('LocationPartQties', {
        InventoryLocationsId: {
            type: DataTypes.INTEGER(10)
        },
        PartsId: {
            type: DataTypes.INTEGER(15)
        },
        qty: {
            type: DataTypes.INTEGER(7)
        },
    }, {
        tableName: 'LocationPartQties',
        freezeTableName: true
    });
    LocationPartQties.associate = function(models) {
        LocationPartQties.belongsTo(models.Parts), { foreignKey: 'PartsId' };
        LocationPartQties.belongsTo(models.InventoryLocations, { foreignKey: 'InventoryLocationsId' });

    };
    return LocationPartQties;
};
