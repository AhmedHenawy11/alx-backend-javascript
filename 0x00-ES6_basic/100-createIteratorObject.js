/* eslint-disable no-console */

export default function createIteratorObject(report) {
  // Accessing the employees key object only from the whole report object
  const employeesObj = report[Object.keys(report)[0]];

  // Creating a list contains a list of all employees
  const employeeLists = [];
  Object.keys(employeesObj).forEach((key) => {
    const singleKey = employeesObj[key];
    employeeLists.push(singleKey);
  });

  // Create employees list each value will be a single name of an employee
  const employees = [];
  employeeLists.forEach((employeeList) => {
    employeeList.forEach((employee) => employees.push(employee));
  });

  return employees;
}
