'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('CustContacts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            fn: {
                type: Sequelize.STRING(20)
            },
            ln: {
                type: Sequelize.STRING(20)
            },
            phonenumber: {
                type: Sequelize.INTEGER(11)
            },
            email: {
                type: Sequelize.STRING(11)
            },
            CustOrganizationsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'CustOrganizations',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            CustContactStatusesId: {
                type: Sequelize.INTEGER(12),
                references: {
                    model: 'CustContactStatuses',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('CustContacts');
    }
};
