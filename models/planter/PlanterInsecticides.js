
'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterInsecticides = sequelize.define('PlanterInsecticides', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterInsecticides',
        freezeTableName: true
    });
    PlanterInsecticides.associate = function(models) {
        // associations can be defined here
        PlanterInsecticides.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterInsecticidesId' });
    };
    return PlanterInsecticides;
};
