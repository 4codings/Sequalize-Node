'use strict';
module.exports = (sequelize, DataTypes) => {
    const InventoryLocations = sequelize.define('InventoryLocations', {
        name: {
            type: DataTypes.STRING(20)
        },
        street: {
            type: DataTypes.INTEGER(3)
        },
        street2: {
            type: DataTypes.STRING(15)
        },
        city: {
            type: DataTypes.STRING(50)
        },
        state: {
            type: DataTypes.STRING(3)
        },
        zipcode: {
            type: DataTypes.STRING(3)
        }
    }, {
        tableName: 'InventoryLocations',
        freezeTableName: true
    });
    InventoryLocations.associate = function(models) {
        // associations can be defined here
        InventoryLocations.hasMany(models.LocationPartQties, { foreignKey: 'InventoryLocationsId' });
    };
    return InventoryLocations;
};
