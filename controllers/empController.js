const db = require("../models");

const noOfEmployeesInEachDepartment = async () => {
  if (db !== undefined && db["Emp"] !== undefined) {
    const result = await db["Emp"].findAll({
      attributes: [
        "dept_no",
        [db.sequelize.fn("count", db.sequelize.col("dept_no")), "count"],
      ],
      group: ["dept_no"],
    });
    for (i in result) {
      console.log(
        "Department No: ",
        result[i].dataValues.dept_no,
        ", Count:  ",
        result[i].dataValues.dept_no
      );
    }
  }
};
const test = async () => {
  await noOfEmployeesInEachDepartment();
};

test();
