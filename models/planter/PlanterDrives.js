'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterDrives = sequelize.define('PlanterDrives', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterDrives',
        freezeTableName: true
    });
    PlanterDrives.associate = function(models) {
        // associations can be defined here
        PlanterDrives.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterDrivesId' });
    };
    return PlanterDrives;
};
