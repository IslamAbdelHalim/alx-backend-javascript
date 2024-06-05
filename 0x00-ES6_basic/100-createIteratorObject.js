export default function createIteratorObject(report) {
	let allEmployees = {};

	for (const employment in Object.values(report.allEmployees)) {
		// allEmployees = {Object.values(report.allEmployees)[employment]};
			console.log(employment)
	}

	console.log(allEmployees)

	console.log(Object.values(report.allEmployees));
	return Object.values(report.allEmployees);
}