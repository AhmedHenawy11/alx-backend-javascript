export default function createEmployeesObject(departmentName, employees) {
  // computed property names
  const obj = {
    [departmentName]: employees,
  };

  return obj;
}
