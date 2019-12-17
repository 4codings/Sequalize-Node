'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgAccountTypes = sequelize.define('OrgAccountTypes', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'OrgAccountTypes',
        freezeTableName: true
    });
    OrgAccountTypes.associate = function(models) {
        // associations can be defined here
        OrgAccountTypes.hasMany(models.CustOrganizations, { foreignKey: 'OrgAccountTypesId' });
    };
    return OrgAccountTypes;
};
