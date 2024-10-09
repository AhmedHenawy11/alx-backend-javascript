// reduce() returns a single accumulated value unlike map() or filter()

export default function getStudentIdsSum(students) {
  const idsSum = students.reduce((acc, student) => acc + student.id, 0);
  return idsSum;
}
