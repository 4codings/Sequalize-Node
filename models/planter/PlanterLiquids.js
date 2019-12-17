'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterLiquids = sequelize.define('PlanterLiquids', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterLiquids',
        freezeTableName: true
    });
    PlanterLiquids.associate = function(models) {
        // associations can be defined here
        PlanterLiquids.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterLiquidsId' });
    };
    return PlanterLiquids;
};
