const db = require("../models");

const noOfEmployeesInEachDepartment = async () => {
  console.log("No Of Employees In Each Department");
  if (db !== undefined && db["Emp"] !== undefined) {
    const result = await db["Emp"].findAll({
      attributes: [
        "dept_no",
        [db.Sequelize.fn("count", db.Sequelize.col("dept_no")), "count"],
      ],
      group: ["dept_no"],
      order: [["dept_no"]],
    });
    for (i in result) {
      console.log(
        "Department No: ",
        result[i].dataValues.dept_no,
        ", Count:  ",
        result[i].dataValues.count
      );
    }
  }
};
const avgSalaryForEachJob = async () => {
  console.log("Average Salary For Each Job");
  if (db !== undefined && db["Emp"] !== undefined) {
    const result = await db["Emp"].findAll({
      attributes: [
        "Job",
        [
          db.Sequelize.fn(
            "ROUND",
            db.Sequelize.fn("avg", db.Sequelize.col("Sal")),
            2
          ),
          "avg_sal",
        ],
      ],
      //   include: {
      //     model: db["Emp"],
      //     as: "MGR",
      //     exclude: ["createdAt", "updatedAt"],
      //   },
      group: ["Job"],
      order: [[db.Sequelize.literal("avg_sal"), "DESC"]],
    });
    for (i in result) {
      console.log(
        "Job: ",
        result[i].dataValues.Job,
        ", Average Salary:  ",
        result[i].dataValues.avg_sal
      );
    }
  }
};

const minAndMaxSalary = async () => {
  const result = await db["Emp"].findAll({
    attributes: [
      "dept_no",
      [db.Sequelize.fn("min", db.Sequelize.col("Sal")), "minSalary"],
      [db.Sequelize.fn("max", db.Sequelize.col("Sal")), "maxSalary"],
    ],
    group: ["dept_no"],
    order: [["dept_no"]],
  });
  for (let i in result) {
    console.log(
      "DeptNo: ",
      result[i].dataValues.dept_no,
      "Min Salary: ",
      result[i].dataValues.minSalary,
      "Max Salary: ",
      result[i].dataValues.maxSalary
    );
  }
};

const test = async () => {
  await noOfEmployeesInEachDepartment();
  await avgSalaryForEachJob();
  await minAndMaxSalary();
};

test();
