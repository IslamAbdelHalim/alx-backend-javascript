export default function updateStudentGradeByCity(studentList, city, newGrads) {
  const newArray = studentList.filter((ele) => ele.location === city).map((ele) => {
    const grade = newGrads.filter((e) => e.studentId === ele.id)[0];
    const element = ele;
    // grade ? ele.grade = grade.grade : ele.grade = 'N/A';
    if (grade) {
      element.grade = grade.grade;
    } else {
      element.grade = 'N/A';
    }
    return element;
  });

  return newArray;
}
