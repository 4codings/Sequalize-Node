'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('PartSubcategories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(80)
            },
            PartCategoriesId: {
                //  type: Sequelize.STRING(25)
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'PartCategories',
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
        return queryInterface.dropTable('PartSubcategories');
    }
};
