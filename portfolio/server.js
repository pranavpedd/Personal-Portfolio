// imports & initial setup
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';

const app = express();

// process/terminal control
process.stdin.setEncoding('utf-8');
const port = process.argv[2];
console.log(`Web server started and running at http://localhost:${port}/`);
const prompt = 'Stop to shutdown the server: ';

process.stdout.write(prompt);
process.stdin.on('readable', function () {
  let input = process.stdin.read();
  if (input !== null) {
    let cmd = input.trim();
    if (cmd === 'stop') {
      process.stdout.write('Shutting down the server\n');
      process.exit(0);
    } else {
      process.stdout.write(`Invalid command: ${cmd}\n`);
    }

    process.stdout.write(prompt);
    process.stdin.resume();
  }
});

// setting directory of ejs pages
app.set('views', path.resolve(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// rendering pages
