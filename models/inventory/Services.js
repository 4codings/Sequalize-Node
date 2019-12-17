'use strict';
module.exports = (sequelize, DataTypes) => {
    const Services = sequelize.define('Services', {
        category: {
            type: DataTypes.INTEGER(3)
        },
        group: {
            type: DataTypes.INTEGER(3)
        },
        partnumber: {
            type: DataTypes.STRING(15)
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
        tableName: 'Services',
        freezeTableName: true
    });
    Services.associate = function(models) {
        // associations can be defined here
    };
    return Services;
};
