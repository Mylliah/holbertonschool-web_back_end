import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((fields) => {
        let response = 'This is the list of our students';
        const sortedFields = Object.keys(fields).sort();

        sortedFields.forEach((field) => {
          const names = fields[field];
          response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        });

        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((fields) => {
        const names = fields[major];
        res.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}

export default StudentsController;
