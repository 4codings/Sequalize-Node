'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Orders', {
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
            OrderStatusesId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'OrderStatuses',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            notes: {
                type: Sequelize.STRING(100)
            },
            total: {
                type: Sequelize.DECIMAL(15,2)
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
        return queryInterface.dropTable('Orders');
    }
};
