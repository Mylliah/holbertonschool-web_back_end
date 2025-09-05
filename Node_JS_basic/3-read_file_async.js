const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.trim().split('\n');
        lines.shift(); // en-tête supprimée

        const students = lines.map((line) => {
          const [firstname, , , field] = line.split(',');
          return { firstname, field };
        });

        const groups = {};
        students.forEach((s) => {
          if (!groups[s.field]) {
            groups[s.field] = [];
          }
          groups[s.field].push(s.firstname);
        });

        const result = [];
        result.push(`Number of students: ${students.length}`);
        for (const field in groups) {
          if (Object.prototype.hasOwnProperty.call(groups, field)) {
            result.push(
              `Number of students in ${field}: ${groups[field].length}. List: ${groups[field].join(', ')}`,
            );
          }
        }
        resolve(result.join('\n')); // tout s’est bien passé
      } catch (e) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
