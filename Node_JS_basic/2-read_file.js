const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8'); // on lit le fichier
    const lines = data.trim().split('\n'); // trim retire vides déb/fin | split découpe en tableau
    const headers = lines.shift().split(','); // shift récup 1ère ligne | split découpe en colonnes
    const students = lines.map((line) => { // map transforme chaque ligne en objet
      const [firstname, , , field] = line.split(','); // destructuration -> affecte dans 2 variables
      return { firstname, field }; // return objet students = { firstname: "str", field: "str" },..
    });

    console.log(`Number of students: ${students.length}`);

    const groups = {}; // prep dico pour regrouper par spé (clé = fiel, valeur = prénom)
    students.forEach((s) => { // comptage pour chaque student
      if (!groups[s.field]) { // si clé n'existe pas initialise à zéro
        groups[s.field] = []; // initialise à []
      }
      groups[s.field].push(s.firstname); // sinon on ajoute prénom au tableau correspondant
    }); // cad CS : prénoms... | SWE : prénoms...

    for (const field in groups) {
      if (Object.prototype.hasOwnProperty.call(groups, field)) {
        console.log(
          `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
