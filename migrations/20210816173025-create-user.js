'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('emp', {
            emp_no: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
            },
            ename: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            job: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            mgr: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: { model: 'Emp', key: 'emp_no' }
            },
            hire_date: {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
            sal: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            comm: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            dept_no: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },

        });
        queryInterface.removeColumn('emp', 'id')

    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};