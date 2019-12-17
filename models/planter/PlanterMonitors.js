'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterMonitors = sequelize.define('PlanterMonitors', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterMonitors',
        freezeTableName: true
    });
    PlanterMonitors.associate = function(models) {
        // associations can be defined here
        PlanterMonitors.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterMonitorsId' });
    };
    return PlanterMonitors;
};
