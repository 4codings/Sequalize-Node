'use strict';
module.exports = (sequelize, DataTypes) => {
    const PartCategories = sequelize.define('PartCategories', {
        name: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: 'PartCategories',
        freezeTableName: true
    });
    PartCategories.associate = function (models) {
        // associations can be defined here
        PartCategories.hasMany(models.PartSubcategories, { foreignKey: 'PartCategoriesId' });
        PartCategories.hasMany(models.Parts, { foreignKey: 'PartCategoriesId' });
    };
    return PartCategories;
};