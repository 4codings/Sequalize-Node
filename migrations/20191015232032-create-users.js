'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            fn: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            ln: {
                type: Sequelize.STRING(10),
                allowNull: false
            },
            username: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            permgroup: {
                // todo
                type: Sequelize.INTEGER(2),
                references: {
                    model: 'UserPerms',
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
        return queryInterface.dropTable('Users');
    }
};
