export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  return listStudents
    .filter(({ location }) => location === city)
    .map((obj) => {
      const Gradex = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = Gradex.length > 0 ? Gradex[0] : {};
      return { ...obj, grade };
    });
}
