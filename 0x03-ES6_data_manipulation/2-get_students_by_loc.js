// function  returns an array of objects who are located in a specific city.
// NOTE: filter()
export default function getStudentsByLocation(students, location) {
  return students.filter((student) => student.location === location);
}
