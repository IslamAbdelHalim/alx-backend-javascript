export default function getListStudentIds(studentList) {
  if (typeof studentList != 'object') {
    return [];
  }

  const listIds = studentList.map((ele) => ele.id);

  return listIds;
}
