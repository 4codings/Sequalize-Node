'use strict';
module.exports = (sequelize, DataTypes) => {
    const EquipmentProfilesTable = sequelize.define('EquipmentProfiles', {
        name: {
            type: DataTypes.STRING(15)
        },
        description: {
            type: DataTypes.STRING(15)
        },
        type: {
            type: DataTypes.STRING(15)
        },
        make: {
            type: DataTypes.STRING(15)
        },
        model: {
            type: DataTypes.STRING(15)
        },
        rowqty: {
            type: DataTypes.STRING(15)
        },
        PlanterClosingWheelsId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterDepthAdjustsId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterDownForcesId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterDrivesId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterInsecticidesId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterMetersId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterLiquidsId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterMonitorsId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterHarnessingsId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterSeedFirmersId: {
            type: DataTypes.INTEGER(11)
        },
        PlanterSeedTubesId: {
            type: DataTypes.INTEGER(11)
        },
        CustOrganizationsId: {
            type: DataTypes.INTEGER(11)
        }
    }, {
        tableName: 'EquipmentProfiles',
        freezeTableName: true
    });
    EquipmentProfilesTable.associate = function(models) {
        // associations can be defined here
        EquipmentProfilesTable.hasMany(models.WorkOrders, { foreignKey: 'EquipmentProfilesId' });

        EquipmentProfilesTable.belongsTo(models.CustOrganizations, { foreignKey: 'CustOrganizationsId' });
        EquipmentProfilesTable.belongsTo(models.PlanterClosingWheels, { foreignKey: 'PlanterClosingWheelsId' });
        EquipmentProfilesTable.belongsTo(models.PlanterDepthAdjusts, { foreignKey: 'PlanterDepthAdjustsId' });
        EquipmentProfilesTable.belongsTo(models.PlanterDownForces, { foreignKey: 'PlanterDownForcesId' });
        EquipmentProfilesTable.belongsTo(models.PlanterDrives, { foreignKey: 'PlanterDrivesId' });
        EquipmentProfilesTable.belongsTo(models.PlanterHarnessings, { foreignKey: 'PlanterHarnessingsId' });
        EquipmentProfilesTable.belongsTo(models.PlanterInsecticides, { foreignKey: 'PlanterInsecticidesId' });
        EquipmentProfilesTable.belongsTo(models.PlanterLiquids, { foreignKey: 'PlanterLiquidsId' });
        EquipmentProfilesTable.belongsTo(models.PlanterMeters, { foreignKey: 'PlanterMetersId' });
        EquipmentProfilesTable.belongsTo(models.PlanterMonitors, { foreignKey: 'PlanterMonitorsId' });
        EquipmentProfilesTable.belongsTo(models.PlanterSeedFirmers, { foreignKey: 'PlanterSeedFirmersId' });
        EquipmentProfilesTable.belongsTo(models.PlanterSeedTubes, { foreignKey: 'PlanterSeedTubesId' });
    };
    return EquipmentProfilesTable;
};
