'use strict';
module.exports = (sequelize, DataTypes) => {
    const WorkOrdersTable = sequelize.define('WorkOrders', {
        description: {
            type: DataTypes.STRING(50)
        },
        type: {
            type: DataTypes.STRING(30)
        },
        notes: {
            type: DataTypes.STRING(500)
        },
        EquipmentProfilesId: {
            type: DataTypes.INTEGER(11)
        },
        WOCategoriesId: {
            type: DataTypes.INTEGER(11)
        },
        WOStatusesId: {
            type: DataTypes.INTEGER(11)
        },
        CustContactsId: {
            type: DataTypes.INTEGER(11)
        },
        CustOrganizationsId: {
            type: DataTypes.INTEGER(11)
        },
        UsersId: {
            type: DataTypes.INTEGER(11)
        },
        WOPrioritiesId: {
            type: DataTypes.INTEGER(11)
        }
    }, {
        tableName: 'WorkOrders',
        freezeTableName: true
    });
    WorkOrdersTable.associate = function (models) {
        WorkOrdersTable.belongsTo(models.EquipmentProfiles, { foreignKey: 'EquipmentProfilesId' });
        WorkOrdersTable.belongsTo(models.WOCategories, { foreignKey: 'WOCategoriesId' });
        WorkOrdersTable.belongsTo(models.WOStatuses, { foreignKey: 'WOStatusesId' });
        WorkOrdersTable.belongsTo(models.CustContacts, { foreignKey: 'CustContactsId' });
        WorkOrdersTable.belongsTo(models.CustOrganizations, { foreignKey: 'CustOrganizationsId' });
        WorkOrdersTable.belongsTo(models.Users, { foreignKey: 'UsersId' });
        WorkOrdersTable.belongsTo(models.WOPriorities, { foreignKey: 'WOPrioritiesId' });

    };
    return WorkOrdersTable;
};
