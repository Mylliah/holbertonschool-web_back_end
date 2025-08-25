import getListStudents from "./0-get_list_students.js";

export default function getListStudentIds(getListStudents) {
    if (!Array.isArray(getListStudents)) {
        return [];
    }
    return getListStudents.map( student => student.id);
}
