'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserPermsTable = sequelize.define('UserPerms', {
        name: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'UserPerms',
        freezeTableName: true
    });
    UserPermsTable.associate = function (models) {
        // associations can be defined here
        UserPermsTable.hasMany(models.Users, { foreignKey: 'permgroup' });
    };
    return UserPermsTable;
};
