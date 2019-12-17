'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgST101Types = sequelize.define('OrgST101Types', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'OrgST101Types',
        freezeTableName: true
    });
    OrgST101Types.associate = function(models) {
        // associations can be defined here
        OrgST101Types.hasMany(models.CustOrganizations, { foreignKey: 'OrgST101TypesId' });
    };
    return OrgST101Types;
};
