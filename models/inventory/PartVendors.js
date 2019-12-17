'use strict';
module.exports = (sequelize, DataTypes) => {
    const PartVendors = sequelize.define('PartVendors', {
        name: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: 'PartVendors',
        freezeTableName: true
    });
    PartVendors.associate = function (models) {
        // associations can be defined here
        PartVendors.hasMany(models.Parts, { foreignKey: 'PartVendorsId' });
    };
    return PartVendors;
};