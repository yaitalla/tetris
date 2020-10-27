const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const sockets = require('./socketsEngine');

app.use(cors({"origin": "*"})); //cross origin ressource sharing
app.use(bodyParser.urlencoded({ extended: false })); //parse request bodies in a midlleware
app.use(bodyParser.json());

/* How To run shell commands from Node.js
const proce = require('child_process');
const myFiles = proce.execSync('ls', {encoding: 'utf8'});
console.log(myFiles);
*/

sockets.startEngine(io);

server.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});