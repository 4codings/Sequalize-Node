'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgFarmTypes = sequelize.define('OrgFarmTypes', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'OrgFarmTypes',
        freezeTableName: true
    });
    OrgFarmTypes.associate = function(models) {
        // associations can be defined here
        OrgFarmTypes.hasMany(models.CustOrganizations, { foreignKey: 'OrgFarmTypesId' });
    };
    return OrgFarmTypes;
};
