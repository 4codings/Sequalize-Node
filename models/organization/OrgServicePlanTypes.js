'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgServicePlanTypes = sequelize.define('OrgServicePlanTypes', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'OrgServicePlanTypes',
        freezeTableName: true
    });
    OrgServicePlanTypes.associate = function(models) {
        // associations can be defined here
        OrgServicePlanTypes.hasMany(models.CustOrganizations, { foreignKey: 'OrgServicePlanTypesId' });
    };
    return OrgServicePlanTypes;
};
