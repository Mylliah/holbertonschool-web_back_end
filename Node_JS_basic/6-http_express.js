const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Hoberton School');
});

app.listen(1245);

module.exports = app;
