const workers = [
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

app.get('/workers', function (req, res) {
    res.json(workers);
  });

// app.get('/worker/:id', function (req, res) {
//   res.json(workers[req.params.id]);
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
