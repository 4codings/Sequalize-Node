'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterHarnessings = sequelize.define('PlanterHarnessings', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterHarnessings',
        freezeTableName: true
    });
    PlanterHarnessings.associate = function(models) {
        // associations can be defined here
        PlanterHarnessings.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterHarnessingsId' });
    };
    return PlanterHarnessings;
};
