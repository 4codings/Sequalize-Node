'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterClosingWheels = sequelize.define('PlanterClosingWheels', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterClosingWheels',
        freezeTableName: true
    });
    PlanterClosingWheels.associate = function(models) {
        // associations can be defined here
        PlanterClosingWheels.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterClosingWheelsId' });
    };
    return PlanterClosingWheels;
};
