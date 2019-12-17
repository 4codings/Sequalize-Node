'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('OrderItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            OrdersId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'Orders',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            qty: {
                type: Sequelize.INTEGER(7)
            },
            total: {
                type: Sequelize.DECIMAL(15,2)
            },
            sourcelocation: {
                type: Sequelize.STRING(15)
            },
            subcategory: {
                type: Sequelize.STRING(15),
            },
            category: {
                type: Sequelize.STRING(15),
            },
            partnumber: {
                type: Sequelize.STRING(15),
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
            price: {
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
        return queryInterface.dropTable('OrderItems');
    }
};
