export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((ele) => ele.location === city);
}
