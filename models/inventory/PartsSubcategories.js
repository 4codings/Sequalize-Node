'use strict';
module.exports = (sequelize, DataTypes) => {
    const PartSubcategories = sequelize.define('PartSubcategories', {
        name: {
            type: DataTypes.STRING(80)
        },
        PartCategoriesId: {
            type: DataTypes.STRING(25)
        }
    }, {
        tableName: 'PartSubcategories',
        freezeTableName: true
    });
    PartSubcategories.associate = function(models) {
        // associations can be defined here
        PartSubcategories.hasMany(models.Parts, { foreignKey: 'PartSubcategoriesId' });
        PartSubcategories.belongsTo(models.PartCategories, { foreignKey: 'PartCategoriesId' });

    };
    return PartSubcategories;
};
