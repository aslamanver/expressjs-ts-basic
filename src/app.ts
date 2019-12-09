// app/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

// Initiating
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});