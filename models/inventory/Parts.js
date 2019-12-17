'use strict';
module.exports = (sequelize, DataTypes) => {
    const Parts = sequelize.define('Parts', {
        PartSubcategoriesId: {
            type: DataTypes.INTEGER(5)
        },
        PartCategoriesId: {
            type: DataTypes.INTEGER(5)
        },
        PartVendorsId: {
            type: DataTypes.INTEGER(5)
        },
        partnumber: {
            type: DataTypes.STRING(15),
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING(50)
        },
        notes: {
            type: DataTypes.STRING(100)
        },
        uom: {
            type: DataTypes.STRING(10)
        },
        listprice: {
            type: DataTypes.DECIMAL(13,2)
        },
        tabxable: {
            type: DataTypes.STRING(10)
        }
    }, {
        tableName: 'Parts',
        freezeTableName: true
    });
    Parts.associate = function(models) {
        Parts.hasMany(models.LocationPartQties, { foreignKey: 'PartsId' });

        Parts.belongsTo(models.PartSubcategories, { foreignKey: 'PartSubcategoriesId' });
        Parts.belongsTo(models.PartCategories, { foreignKey: 'PartCategoriesId' });
        Parts.belongsTo(models.PartVendors, { foreignKey: 'PartVendorsId' });

    };
    return Parts;
};
