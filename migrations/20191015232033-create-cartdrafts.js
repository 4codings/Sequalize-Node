'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('CartDrafts', {
            UsersId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {         // User hasMany WorkingDays n:n
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            items: {
                type: Sequelize.JSON,
                allowNull: false
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
        return queryInterface.dropTable('CartDrafts');
    }
};
