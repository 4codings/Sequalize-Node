'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterDepthAdjusts = sequelize.define('PlanterDepthAdjusts', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterDepthAdjusts',
        freezeTableName: true
    });
    PlanterDepthAdjusts.associate = function(models) {
        // associations can be defined here
        PlanterDepthAdjusts.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterDepthAdjustsId' });
    };
    return PlanterDepthAdjusts;
};
