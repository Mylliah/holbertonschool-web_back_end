import getListStudents from "./0-get_list_students.js";

export default function getStudentIdsSum(getListStudents) {
    return getListStudents.reduce((acc, students) => acc + students.id, 0);
}
