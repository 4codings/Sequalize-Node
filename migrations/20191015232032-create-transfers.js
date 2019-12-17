'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Transfers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
            TransferStatusesId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'TransferStatuses',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            notes: {
                type: Sequelize.STRING(100)
            },
            destination: {
                type: Sequelize.STRING(100)
            },
            source: {
                type: Sequelize.STRING(100)
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
        return queryInterface.dropTable('Transfers');
    }
};
