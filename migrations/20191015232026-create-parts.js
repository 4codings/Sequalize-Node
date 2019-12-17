'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Parts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            PartSubcategoriesId: {
                type: Sequelize.INTEGER(5),
                allowNull: true,
                references: {
                    model: 'PartSubcategories',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PartCategoriesId: {
                type: Sequelize.INTEGER(5),
                allowNull: true,
                references: {
                    model: 'PartCategories',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            partnumber: {
                type: Sequelize.STRING(15),
                primaryKey: true,
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
                type: Sequelize.DECIMAL(13, 2)
            },
            tabxable: {
                type: Sequelize.INTEGER
            },
            PartVendorsId: {
                type: Sequelize.INTEGER(5)
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
        return queryInterface.dropTable('Parts');
    }
};
