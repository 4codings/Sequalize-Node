'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TransferItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            TransfersId: {
                type: Sequelize.INTEGER(11)
            },
            qty: {
                type: Sequelize.INTEGER(5)
            },
            partssubcategory: {
                type: Sequelize.STRING(50)
            },
            partscategory: {
                type: Sequelize.STRING(50)
            },
            partnumber: {
                type: Sequelize.STRING(10),
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
        return queryInterface.dropTable('TransferItems');
    }
};
