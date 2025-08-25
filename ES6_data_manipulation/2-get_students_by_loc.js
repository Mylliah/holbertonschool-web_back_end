import getListStudents from "./0-get_list_students.js";

export default function getStudentsByLocation(getListStudents, city) {
    return getListStudents.filter(students => students.location === city);
}
