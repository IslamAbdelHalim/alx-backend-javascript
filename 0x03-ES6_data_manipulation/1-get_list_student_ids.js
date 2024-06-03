export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  const listIds = studentList.map((ele) => ele.id);

  return listIds;
}
