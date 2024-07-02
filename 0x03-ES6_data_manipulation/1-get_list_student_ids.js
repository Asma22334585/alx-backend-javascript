export default function getListStudentIds(IdStudents) {
  return Array.isArray(IdStudents) ? IdStudents.map(({ id }) => id) : [];
}
