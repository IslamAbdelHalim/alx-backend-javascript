export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const employ in employeesList) {
    allEmployees[employ] = employeesList[employ];
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
