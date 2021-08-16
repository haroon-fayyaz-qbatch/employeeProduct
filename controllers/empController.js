const { sequelize } = require('../connection');
const { db } = require('../models/index');

const noOfEmployeesInEachDepartment = async() => {
    const result = await db['Emp'].findAll({
        attributes: ['dept_no',
            sequelize.fn('count', sequelize.col('dept_no'))
        ],
        group: ['dept_no']
    });

    console.log(result);
}


noOfEmployeesInEachDepartment();