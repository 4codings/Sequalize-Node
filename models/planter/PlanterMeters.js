'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterMeters = sequelize.define('PlanterMeters', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterMeters',
        freezeTableName: true
    });
    PlanterMeters.associate = function(models) {
        // associations can be defined here
        PlanterMeters.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterMetersId' });
    };
    return PlanterMeters;
};
