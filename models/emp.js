'use strict';
const {
    Model
} = require('DataTypes');
module.exports = (DataTypes, DataTypes) => {
    class Emp extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of DataTypes lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Emp.hasOne(models.Emp, {
                onDelete: 'CASCADE',
                foreignKey: {
                    name: 'mgr',
                    allowNull: true
                },
                as: 'MGR'
            });
        }
    };
    Emp.init({
        emp_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        ename: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        job: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mgr: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: { model: 'Emp', key: 'emp_no' }
        },
        hire_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        sal: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        comm: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dept_no: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        DataTypes,
        modelName: 'Emp',
    });
    return Emp;
};