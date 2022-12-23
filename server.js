const employees = [
    {
        id: 0,
        name: 'Elman',
        age: 30
    },

    {
        id: 1,
        name: 'Narmin',
        age: 20
    },

    {
        id: 2,
        name: 'Nigar',
        age: 21
    }
]

const express = require('express');
const app = express();

app.get('/employee', function (req, res) {
    res.json(employees);
  });

// app.get('/employee/:id', function (req, res) {
//   res.json(employees[req.params.id]);
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});