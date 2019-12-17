'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlanterSeedTubes = sequelize.define('PlanterSeedTubes', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'PlanterSeedTubes',
        freezeTableName: true
    });
    PlanterSeedTubes.associate = function(models) {
        // associations can be defined here
        PlanterSeedTubes.hasMany(models.EquipmentProfiles, { foreignKey: 'PlanterSeedTubesId' });
    };
    return PlanterSeedTubes;
};
