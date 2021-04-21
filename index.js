const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const routes = require('./src/routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  //TODO: flesh out CORS
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 4000;

app.use('/', routes);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // send message to be consumed by client
  socket.emit("FromAPI", response);
};

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});