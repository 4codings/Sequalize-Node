'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterDownForces = sequelize.define('PlanterDownForces', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterDownForces',
        freezeTableName: true
    });
    PlanterDownForces.associate = function(models) {
        // associations can be defined here
        PlanterDownForces.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterDownForcesId' });
    };
    return PlanterDownForces;
};
