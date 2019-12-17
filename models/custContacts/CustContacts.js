'use strict';
module.exports = (sequelize, DataTypes) => {
    const CustContacts = sequelize.define('CustContacts', {
        fn: {
            type: DataTypes.STRING(20)
        },
        ln: {
            type: DataTypes.STRING(20)
        },
        phonenumber: {
            type: DataTypes.INTEGER(11)
        },
        email: {
            type: DataTypes.STRING(11)
        },
        CustOrganizationsId: {
            type: DataTypes.INTEGER(11)
        },
        CustContactStatusesId: {
            type: DataTypes.INTEGER(12)
        }
    }, {
        tableName: 'CustContacts',
        freezeTableName: true
    });
    CustContacts.associate = function(models) {
        // associations can be defined here
        CustContacts.hasMany(models.WorkOrders, { foreignKey: 'CustContactsId' });

        CustContacts.belongsTo(models.CustOrganizations, { foreignKey: 'CustOrganizationsId' });
        CustContacts.belongsTo(models.CustContactStatuses, { foreignKey: 'CustContactStatusesId' });

    };
    return CustContacts;
};
