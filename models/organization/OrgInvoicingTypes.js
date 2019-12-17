'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgInvoicingTypes = sequelize.define('OrgInvoicingTypes', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'OrgInvoicingTypes',
        freezeTableName: true
    });
    OrgInvoicingTypes.associate = function(models) {
        // associations can be defined here
        OrgInvoicingTypes.hasMany(models.CustOrganizations, { foreignKey: 'OrgInvoicingTypesId' });
    };
    return OrgInvoicingTypes;
};
