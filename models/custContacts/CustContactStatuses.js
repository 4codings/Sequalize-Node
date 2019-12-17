'use strict';
module.exports = (sequelize, DataTypes) => {
    const CustContactStatuses = sequelize.define('CustContactStatuses', {
        name: {
            type: DataTypes.STRING(11)
        }
    }, {
        tableName: 'CustContactStatuses',
        freezeTableName: true
    });
    CustContactStatuses.associate = function(models) {
        // associations can be defined here
        CustContactStatuses.hasMany(models.CustContacts, { foreignKey: 'CustContactStatusesId' });
    };
    return CustContactStatuses;
};
