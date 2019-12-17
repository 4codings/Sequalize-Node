'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Services', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            category: {
                type: Sequelize.INTEGER(3)
            },
            group: {
                type: Sequelize.INTEGER(3)
            },
            partnumber: {
                type: Sequelize.STRING(15)
            },
            description: {
                type: Sequelize.STRING(50)
            },
            notes: {
                type: Sequelize.STRING(100)
            },
            uom: {
                type: Sequelize.STRING(10)
            },
            listprice: {
                type: Sequelize.DECIMAL(13,2)
            },
            tabxable: {
                type: Sequelize.STRING(10)
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
        return queryInterface.dropTable('Services');
    }
};
