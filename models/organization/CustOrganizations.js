'use strict';
module.exports = (sequelize, DataTypes) => {
    const CustOrganizations = sequelize.define('CustOrganizations', {
        name: {
            type: DataTypes.STRING(30)
        },
        street: {
            type: DataTypes.STRING(50)
        },
        street2: {
            type: DataTypes.STRING(15)
        },
        city: {
            type: DataTypes.STRING(21)
        },
        state: {
            type: DataTypes.STRING(2)
        },
        zip: {
            type: DataTypes.INTEGER(5)
        },
        country: {
            type: DataTypes.STRING(3)
        },
        phone: {
            type: DataTypes.INTEGER(11)
        },
        email: {
            type: DataTypes.STRING(25)
        },
        salescontact: {
            type: DataTypes.STRING(11)
        },
        billingcontact: {
            type: DataTypes.STRING(11)
        },
        OrgAccountTypesId: {
            type: DataTypes.INTEGER(11)
        },
        OrgFarmTypesId: {
            type: DataTypes.INTEGER(11)
        },
        OrgInvoicingTypesId: {
            type: DataTypes.INTEGER(11)
        },
        OrgMarketsId: {
            type: DataTypes.INTEGER(11)
        },
        OrgServicePlanTypesId: {
            type: DataTypes.INTEGER(11)
        },
        OrgST101TypesId: {
            type: DataTypes.INTEGER(11)
        },
    }, {
        tableName: 'CustOrganizations',
        freezeTableName: true
    });
    CustOrganizations.associate = function(models) {
        // associations can be defined here

        CustOrganizations.hasMany(models.EquipmentProfiles, { foreignKey: 'CustOrganizationsId' });
        CustOrganizations.hasMany(models.CustContacts, { foreignKey: 'CustOrganizationsId' });
        CustOrganizations.hasMany(models.WorkOrders, { foreignKey: 'CustOrganizationsId' });
        CustOrganizations.hasMany(models.Orders, { foreignKey: 'CustOrganizationsId' });
        CustOrganizations.hasMany(models.Transfers, { foreignKey: 'CustOrganizationsId' });

        CustOrganizations.belongsTo(models.OrgST101Types, { foreignKey: 'OrgST101TypesId' });
        CustOrganizations.belongsTo(models.OrgServicePlanTypes, { foreignKey: 'OrgServicePlanTypesId' });
        CustOrganizations.belongsTo(models.OrgMarkets, { foreignKey: 'OrgMarketsId' });
        CustOrganizations.belongsTo(models.OrgInvoicingTypes, { foreignKey: 'OrgInvoicingTypesId' });
        CustOrganizations.belongsTo(models.OrgFarmTypes, { foreignKey: 'OrgFarmTypesId' });
        CustOrganizations.belongsTo(models.OrgAccountTypes, { foreignKey: 'OrgAccountTypesId' });

    };
    return CustOrganizations;
};
