
'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterSeedFirmers = sequelize.define('PlanterSeedFirmers', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterSeedFirmers',
        freezeTableName: true
    });
    PlanterSeedFirmers.associate = function(models) {
        // associations can be defined here
        PlanterSeedFirmers.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterSeedFirmersId' });
    };
    return PlanterSeedFirmers;
};
