'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('InventoryLocations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(20)
            },
            street: {
                type: Sequelize.INTEGER(3)
            },
            street2: {
                type: Sequelize.STRING(15)
            },
            city: {
                type: Sequelize.STRING(50)
            },
            state: {
                type: Sequelize.STRING(3)
            },
            zipcode: {
                type: Sequelize.STRING(3)
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
        return queryInterface.dropTable('InventoryLocations');
    }
};
