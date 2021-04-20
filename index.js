const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

const routes = require('./src/routes');

io.on('connection', () => { 
  //TODO: add socket logic
});

app.use('/', routes);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});