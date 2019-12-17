'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ActivityLogs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            UsersId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {         // User hasMany WorkingDays n:n
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            object: {
                type: Sequelize.JSON,
                allowNull: false
            },
            action: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
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
        return queryInterface.dropTable('ActivityLogs');
    }
};
