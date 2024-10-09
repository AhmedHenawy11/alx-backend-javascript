// function getListStudentIds that returns an array of ids from a list of object.
// NOTE: map() usage for arrays
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const studentId = students.map((student) => student.id);
    return studentId;
  }
  return [];
}
