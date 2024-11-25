const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const RequestHandler = require('./RequestHandler'); // Import the RequestHandler

class Server {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);  // HTTP server
    this.io = socketIo(this.server);  // Socket.io server
  }

  initialize() {
    this.configureMiddlewares();  // Set up middleware (if needed)
    this.handleRoutes();          // Set up any routes (if needed)
    this.initializeSocket();      // Set up WebSocket communication
    this.startServer();           // Start the server
  }

  configureMiddlewares() {
    // Example: Add middleware (if needed)
    this.app.use(express.json());  // To parse JSON data
  }

  handleRoutes() {
    // Add your Express routes here if you have HTTP APIs
    // Example:
    // this.app.get('/', (req, res) => res.send('Hello World'));
  }

  initializeSocket() {
    const requestHandler = new RequestHandler(this.io);  // Pass socket.io instance to RequestHandler
    requestHandler.handleRequest();  // Listen for requests from clients
  }

  startServer() {
    const port = process.env.PORT || 3000;
    this.server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

module.exports = Server;
