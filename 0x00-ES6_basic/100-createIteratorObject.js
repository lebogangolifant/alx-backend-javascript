export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const result = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      const departmentEmployees = allEmployees[department];
      for (const employee of departmentEmployees) {
        result.push(employee);
      }
    }
  }

  return result;
}
