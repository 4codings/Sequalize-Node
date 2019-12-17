'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('CustOrganizations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(30)
            },
            street: {
                type: Sequelize.STRING(50)
            },
            street2: {
                type: Sequelize.STRING(15)
            },
            city: {
                type: Sequelize.STRING(21)
            },
            state: {
                type: Sequelize.STRING(2)
            },
            zip: {
                type: Sequelize.INTEGER(5)
            },
            country: {
                type: Sequelize.STRING(3)
            },
            phone: {
                type: Sequelize.INTEGER(11)
            },
            email: {
                type: Sequelize.STRING(25)
            },
            salescontact: {
                type: Sequelize.STRING(11)
            },
            billingcontact: {
                type: Sequelize.STRING(11)
            },
            OrgAccountTypesId: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'OrgAccountTypes',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            OrgFarmTypesId: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'OrgFarmTypes',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            OrgInvoicingTypesId: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'OrgInvoicingTypes',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            OrgMarketsId: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'OrgMarkets',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            OrgServicePlanTypesId: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'OrgServicePlanTypes',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            OrgST101TypesId: {
                type: Sequelize.INTEGER(11),
                allowNull: true,
                references: {
                    model: 'OrgST101Types',
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
        return queryInterface.dropTable('CustOrganizations');
    }
};
