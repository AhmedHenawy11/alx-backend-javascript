/* eslint-disable no-console */
// Compining filter with map
export default function updateStudentGradeByCity(students, city, newGrades) {
  // create array of stident of targted city
  const targtedStudents = students.filter((student) => student.location === city);

  return targtedStudents.map((student) => {
    // Using filter to get the grade where id
    const grade = newGrades.filter((obj) => student.id === obj.studentId);

    // Assign the new grade to student
    if (grade.length > 0) {
      // eslint-disable-next-line
      student.grade = grade[0].grade; // Safe: grade[0] exists
    } else {
      // eslint-disable-next-line
      student.grade = null; // No grade found, handle gracefully
    }

    return student;
  });
}
