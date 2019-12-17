'use strict';
module.exports = (sequelize, DataTypes) => {
    const OrgMarkets = sequelize.define('OrgMarkets', {
        name: {
            type: DataTypes.STRING(20)
        }
    }, {
        tableName: 'OrgMarkets',
        freezeTableName: true
    });
    OrgMarkets.associate = function(models) {
        // associations can be defined here
        OrgMarkets.hasMany(models.CustOrganizations), { foreignKey: 'OrgMarketsId' };
    };
    return OrgMarkets;
};
