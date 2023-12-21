// imports & initial setup
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

// process/terminal control
process.stdin.setEncoding('utf-8');
const port = process.argv[2];

// setting directory of ejs pages
app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public/images', 'letter p icon.ico')));

// rendering pages
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/work', (req, res) => {
  res.render('work');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
