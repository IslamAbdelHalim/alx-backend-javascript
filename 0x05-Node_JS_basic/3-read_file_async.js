const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const students = data.split('\n').slice(1, -1);
    const studentCs = [];
    const studentSwe = [];

    for (const student of students) {
      if (student.includes('CS')) {
        studentCs.push(student.split(',', 1)[0]);
      } else if (student.includes('SWE')) {
        studentSwe.push(student.split(',', 1)[0]);
      }
    }
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${studentCs.length}. List: ${studentCs.join(', ')}`);
    console.log(`Number of students in SWE: ${studentSwe.length}. List: ${studentSwe.join(', ')}`);
  });
}

module.exports = countStudents;
