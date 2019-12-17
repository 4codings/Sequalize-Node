'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('EquipmentProfiles', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING(15)
            },
            description: {
                type: Sequelize.STRING(15)
            },
            type: {
                type: Sequelize.STRING(15)
            },
            make: {
                type: Sequelize.STRING(15)
            },
            model: {
                type: Sequelize.STRING(15)
            },
            rowqty: {
                type: Sequelize.STRING(15)
            },
            PlanterClosingWheelsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterClosingWheels',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterDepthAdjustsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterDepthAdjusts',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterDownForcesId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterDownForces',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterDrivesId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterDrives',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterInsecticidesId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterInsecticides',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterMetersId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterMeters',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterLiquidsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterLiquids',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterMonitorsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterMonitors',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterHarnessingsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterHarnessings',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterSeedFirmersId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterSeedFirmers',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            PlanterSeedTubesId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'PlanterSeedTubes',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
            CustOrganizationsId: {
                type: Sequelize.INTEGER(11),
                references: {
                    model: 'CustOrganizations',
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
        return queryInterface.dropTable('EquipmentProfiles');
    }
};
